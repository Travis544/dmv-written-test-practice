import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';


export default function Resources()  {


    return (
        <Box
            sx={{
            width: 800,
            }}
        >
            <Card >
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        相关资源
                    </Typography>
                        <li> 
                            <Link href="https://www.dmv.ca.gov/portal/file/california-driver-handbook-pdf/">
                                加州DMV官方驾驶手册英文版 (PDF)
                            </Link>
                        </li>

                        <li> 
                            <Link href="https://www.dmv.ca.gov/portal/file/california-driver-handbook-chinese-pdf/" >
                                加州DMV官方驾驶手册中文版 (PDF)
                            </Link>
                        </li>

                    </CardContent>
                  
                </Card>
        </Box>
        
        
    );


}