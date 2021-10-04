import { useState, useEffect } from 'react';
import { FilledInput, FormControl } from '@mui/material';
import randomstring from 'randomstring';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Autorenew, ContentCopy } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import Logo from '../logo/Logo';
import { Button, Typography } from '@mui/material';
import { grey } from '@mui/material/colors';
import { FiLink } from 'react-icons/fi';

const url = window.location.protocol + '//' + window.location.host + '/';

const Root = styled('div')(({ theme }) => ({
  maxWidth: '100%',
  padding: theme.spacing(1),
  margin: 'auto',
}));

const HeaderContent = styled('div')(({ theme }) => ({
  padding: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(4),
  },
}));

const LogoContainer = styled('div')(({ theme }) => ({
  width: '35%',
  margin: `0 auto ${theme.spacing(4)}`,
  [theme.breakpoints.up('sm')]: {
    padding: `0 auto ${theme.spacing(2)}`,
  },
}));

const TextDescription = styled(Typography)(({ theme }) => ({
  padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(2),
  },
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
  justifyContent: 'flex-start',
  [theme.breakpoints.down('sm')]: {
    maxWidth: 160,
    overflow: 'auto',
    height: 50,
    paddingRight: 25,
    position: 'relative',
    '&:after': {
      width: 50,
      height: 50,
      background: `linear-gradient(
90deg, transparent, 40%, ${theme.palette.grey[200]})`,
      content: '""',
      position: 'fixed',
      right: 130,
    },
  },
}));

const RefreshIcon = styled(LinkIcon)({
  cursor: 'pointer',
});

const CopyIcon = styled(RefreshIcon)(({ theme, copied }) => ({
  border: `1px solid ${theme.palette.grey[600]}`,
  borderRadius: 2,
  color: copied ? theme.palette.grey[100] : theme.palette.grey[500],
  background: copied ? theme.palette.primary.main : theme.palette.grey[200],
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          <RefreshIcon onClick={_hashUrl}>
            <Autorenew />
          </RefreshIcon>
          <CopyIcon copied={data.copied}>
            <CopyToClipboard
              text={`${url}${data.hashUrl}`}
              onCopy={() => setData({ ...data, copied: true })}
            >
              <ContentCopy />
            </CopyToClipboard>
          </CopyIcon>
        </FlexContent>
      </HashedLink>
    </Root>
  );
};

export default HashUrlForm;
