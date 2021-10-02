import { useState, useEffect } from 'react';
import { TextField, Box, FilledInput, FormControl } from '@mui/material';
import randomstring from 'randomstring';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Autorenew, ContentCopy } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/material/styles';
import Logo from '../logo/Logo';
import { UploadImage, CustomInput } from '..';
import { FaPhoneAlt } from 'react-icons/fa';
import { BiAt } from 'react-icons/bi';
import { Button, Link, Typography, Paper } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import { FiLink } from 'react-icons/fi';

const url = window.location.protocol + '//' + window.location.host + '/';

const Root = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  padding: theme.spacing(2),
  margin: 'auto',
}));

const HeaderContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(4),
}));

const LogoContainer = styled('div')(({ theme }) => ({
  width: '35%',
  margin: `0 auto ${theme.spacing(4)}`,
}));

const TextDescription = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
}));

const TextCaption = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(1)} 0`,
}));

const GetName = styled('div')({
  display: 'flex',
});

const HashedLink = styled('div')(({ theme }) => ({
  display: 'flex',
  width: '100%',
  height: 50,
  background: grey[200],
  alignItems: 'center',
  justifyContent: 'space-between',
}));

const FlexContent = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const LinkIcon = styled(FlexContent)(({ theme }) => ({
  width: 50,
  height: 50,
  color: theme.palette.grey[500],
}));

const LinkText = styled(FlexContent)(({ theme }) => ({
  color: theme.palette.primary.main,
  textDecoration: 'underline',
}));

const RefreshIcon = styled(LinkIcon)({
  cursor: 'pointer',
});

const CopyIcon = styled(RefreshIcon)(({ theme }) => ({
  border: `1px solid ${theme.palette.grey[600]}`,
  borderRadius: 2,
  color: theme.palette.grey[700],
  '&:hover': {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  '&:active': {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary[200],
  },
  '&:focus': {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    background: theme.palette.primary[200],
  },
}));

const HashUrlForm = () => {
  const [data, setData] = useState({
    name: null,
    hashUrl: null,
    copied: false,
  });

  const _onChange = (e) => {
    setData({
      ...data,
      name: e.target.value,
    });
  };

  const _hashUrl = () => {
    let hashed = randomstring.generate({
      length: 12,
      charset: 'alphabetic',
    });
    setData({
      ...data,
      hashUrl: hashed.toLocaleLowerCase(),
      copied: false,
    });
  };

  useEffect(() => {
    _hashUrl();
  }, []);

  return (
    <Root>
      <HeaderContent>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <Typography variant='h1' component='h1' align='center'>
          Generate New Link
        </Typography>
        <TextDescription
          variant='body1'
          component='p'
          align='center'
          gutterBottom
        >
          Let's get you all set up so you can start managing the acount
        </TextDescription>
        <GetName>
          <FormControl fullWidth variant='filled'>
            <FilledInput
              id='filled-adornment-amount'
              placeholder='Customer Name'
              disableUnderline={true}
              onChange={_onChange}
              value={data.name}
            />
          </FormControl>
          <Button variant='contained'>Submit</Button>
        </GetName>
        <TextCaption variant='body2' component='p'>
          This name will help us with analytics
        </TextCaption>
      </HeaderContent>
      <HashedLink>
        <FlexContent>
          <LinkIcon>
            <FiLink />
          </LinkIcon>
          <LinkText>
            <Typography>{`${url}${data.hashUrl}`}</Typography>
          </LinkText>
        </FlexContent>
        <FlexContent>
          <RefreshIcon>
            <Autorenew />
          </RefreshIcon>
          <CopyIcon>
            <ContentCopy />
          </CopyIcon>
        </FlexContent>
      </HashedLink>
    </Root>
  );
};

// <Typography>Uniq Url - {`${url}${data.hashUrl}`}</Typography>
// <Autorenew onClick={_hashUrl} style={{ marginLeft: '5px' }} />
// <CopyToClipboard
// text={`${url}${data.hashUrl}`}
// onCopy={() => setData({ ...data, copied: true })}
// >
// <ContentCopy style={{ marginLeft: '5px' }} />
// </CopyToClipboard>

export default HashUrlForm;
