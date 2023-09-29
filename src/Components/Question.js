
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

  
export default function Question({questionObj, onNextQuestion, onPrevQuestion, onJump, questionLength, questionIndex}) {
    const [selectedChoice, setSelectedChoice] = React.useState("")
    const [isCorrect, setIsCorrect] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [isInvalidQuestionJumpInput, setIsInvalidQuestionJump] = React.useState(false)
    const [questionJump, setQuestionJump] = React.useState("1")

    React.useEffect(()=>{
        console.log(selectedChoice)
    }, [selectedChoice])

    const choiceSelected = (event) =>{
        setSelectedChoice(event.target.value)
       
    }

    const determineColor = (choice) => {
        let chosenColor = selectedChoice === choice && choice === questionObj.answer ?  "success" :"error" 
       
        return chosenColor
    }

    const handleCloseModal = () => {
        setOpen(false)
    }
    
    const handleConfirmJump = () => {
        if (questionJump === 0) {
            setIsInvalidQuestionJump(true)
            return
        }

        onJump(questionJump)
        setOpen(false)
    }


    const handleInputChange = (event) => {

        let val = Math.min(event.target.value.replace(/[^0-9]/g,''), questionLength)
        // val = Math.max(val, 1)
        setIsInvalidQuestionJump(false)
        setQuestionJump(val)
    }

    return (

      <Box  sx={{
        width: 800,
       
        }}>
        
            <Card >
                {questionObj.questionImageUrl &&
                <CardMedia
                    sx={{ objectFit: "contain" }}
                component="img"
                alt={"Image Couldn't be loaded"}
                height="300"
                image={questionObj.questionImageUrl}
                />}
                <CardContent>
                    <Typography variant="h5" component="div">
                        {questionObj.question}
                    </Typography>
                    <CardHeader
                        subheader={questionIndex + "/" + questionLength}
                    
                    />
                    <br/>
                    <FormControl sx={{justifyContent: "left", display: "flex", paddingLeft:2}}>
                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        value={selectedChoice}
                        name="radio-buttons-group"
                        onChange={choiceSelected}
                    >
                        {
                            questionObj.choices.map((choice, index)=>{
                                return (
                                <FormControlLabel 
                                    key={choice} value={choice} control={<Radio 
                                    // sx={{color:
                                    //   determineColor(choice)  }}
                                    color = {determineColor(choice)}/>} 
                                    label={choice} 
                                />
                                )
                            })
                        }
                    </RadioGroup>
                    </FormControl>
                </CardContent>

                <CardActions sx={{display:"flex", justifyContent:"center"}}>
                    <Button  
                        onClick={() => {
                        onPrevQuestion()
                        }} 
                        variant="outlined">
                            上一题
                    </Button>
                    
                    <Button     
                        variant="outlined"
                        onClick = {()=> {
                            setOpen(true)
                        }}
                    >
                        跳越
                    </Button>


                    <Button 
                        onClick={() => {
                        onNextQuestion()
                        }} 
                        variant="outlined">
                            下一题
                    </Button>
                </CardActions>

            
            </Card>
    
        
        <Modal
                open={open}
                onClose={handleCloseModal}
                aria-labelledby="child-modal-title"
                aria-describedby="child-modal-description"
            >
                <Box sx={{ ...modalStyle, width: 200 }}>
                    
                    <p id="child-modal-description">
                        请输入要跳的位置（共{questionLength}道题）
                    </p>
                    {isInvalidQuestionJumpInput?
                        <TextField
                        error
                        id="outlined-error-helper-text"
                        label="题数"
                        
                        type="text"
                        pattern="\d*"
                        value = {questionJump}
                        onChange={handleInputChange}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    />
                    :
                    <TextField
                        id="outlined-error-helper-text"
                        label="题数"
                        type="text"
                        pattern="\d*"
                        value = {questionJump}
                        onChange={handleInputChange}
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    />
                    
                    }

                    <Button onClick={handleConfirmJump}>确定</Button>
                    <Button onClick={handleCloseModal}>取消</Button>
                </Box>
        </Modal>
      </Box>
    );
  }