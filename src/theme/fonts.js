import LatoBlackTTF from '../assets/fonts/LatoBlack.ttf';
import LatoBoldTTF from '../assets/fonts/LatoBold.ttf';
import LatoLightTTF from '../assets/fonts/LatoLight.ttf';
import LatoRegularTTF from '../assets/fonts/LatoRegular.ttf';
import LatoThinTTF from '../assets/fonts/LatoThin.ttf';

export const fonts = {
    MuiCssBaseline: {
        styleOverrides: `
            @font-face{
            font-family: 'LatoBlack';
            src: local('LatoBlack'), url(${LatoBlackTTF}) format('truetype');
            }

            @font-face{
            font-family: 'LatoBold';
            src: local('LatoBold'), url(${LatoBoldTTF}) format('truetype');
            }
           
            @font-face{
            font-family: 'LatoLight';
            src: local('LatoLight'), url(${LatoLightTTF}) format('truetype');
            }
     
            @font-face{
            font-family: 'LatoRegular';
            src: local('LatoRegular'), url(${LatoRegularTTF}) format('truetype');
            }
               
            @font-face{
            font-family: 'LatoThin';
            src: local('LatoThin'), url(${LatoThinTTF}) format('truetype');
            }

        `,
    },
}