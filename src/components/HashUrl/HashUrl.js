import { useState, useEffect } from 'react';
import { TextField, Box, Typography } from '@mui/material';
import randomstring from 'randomstring'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Autorenew, ContentCopy } from '@mui/icons-material';

const url = window.location.protocol + "//" + window.location.host + "/"

const HashUrl = () => {
    const [data, setData] = useState({
        name: null,
        hashUrl: null,
        copied: false
    })

    const _onChange = (e) => {
        setData({
            ...data,
            name: e.target.value
        })
    }

    const _hashUrl = () => {
        let hashed = randomstring.generate({
            length: 12,
            charset: 'alphabetic'
        })
        setData({
            ...data,
            hashUrl: hashed.toLocaleLowerCase(),
            copied: false
        })
    }

    useEffect(() => {
        _hashUrl()
    }, [])


    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center'
        }}>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
                noValidate
                autoComplete="off"
            >
                <TextField
                    id="outlined-helperText"
                    label="Customer Name"
                    helperText="This name will help us with analytics"
                    value={data.name}
                    onChange={_onChange}
                />
                <div style={{
                    marginTop: '100px'
                }}>
                    <Typography>This url is unique for a customer, one customer one url</Typography>
                </div>
                <div style={{
                    display: "flex",
                    marginTop: '20px'
                }}>
                    <Typography>
                        Uniq Url -  {`${url}${data.hashUrl}`}
                    </Typography>

                    <div>
                        <Autorenew onClick={_hashUrl} style={{marginLeft: '5px'}}/>
                    </div>
                    <CopyToClipboard text={`${url}${data.hashUrl}`}
                        onCopy={() => setData({ ...data, copied: true })}>
                        <ContentCopy style={{marginLeft: '5px'}}/>
                    </CopyToClipboard>
                    <div>
                        {data.copied ? <Typography>Coppied</Typography> : ''}
                    </div>
                </div>
            </Box>
        </div>
    );
};

export default HashUrl;