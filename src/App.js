import Message from 'components/Message';
import useAuth from 'hooks/useAuth';
import { useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import { BrowserRouter } from 'react-router-dom';
import 'simplebar/src/simplebar.css';
import { AuthProvider } from './auth/JwtContext';
import { MotionLazyContainer } from './components/animate';
import ScrollToTop from './components/scroll-to-top';
import { SettingsProvider, ThemeSettings } from './components/settings';
import SnackbarProvider from './components/snackbar';
import ThemeLocalization from './locales';
import './locales/i18n';
import Router from './routes';
import { connectWithSocketServer } from './socket';
import ThemeProvider from './theme';

export default function App() {
  const user = useAuth();

  useEffect(() => {
    if (user.token) {
      connectWithSocketServer(user);
    }
  }, [user]);

  return (
    <AuthProvider>
      <HelmetProvider>
        <SettingsProvider>
          <BrowserRouter>
            <ScrollToTop />
            <MotionLazyContainer>
              <ThemeProvider>
                <ThemeSettings>
                  <ThemeLocalization>
                    <SnackbarProvider>
                      <Message />
                      <Router />
                    </SnackbarProvider>
                  </ThemeLocalization>
                </ThemeSettings>
              </ThemeProvider>
            </MotionLazyContainer>
          </BrowserRouter>
        </SettingsProvider>
      </HelmetProvider>
    </AuthProvider>
  );
}
