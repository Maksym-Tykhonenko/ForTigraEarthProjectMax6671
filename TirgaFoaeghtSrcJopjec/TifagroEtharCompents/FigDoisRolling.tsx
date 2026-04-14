import { Dimensions, View, } from 'react-native';
import { WebView } from 'react-native-webview';

const FigDoisRolling = () => {
  const dimensions = Dimensions.get('window');

  const insilodia = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        /* From Uiverse.io by AbanoubMagdy1 */ 
        .loader {
          --dim: 3rem;
          width: var(--dim);
          height: var(--dim);
          position: relative;
          animation: spin988 2s linear infinite;
        }

        .loader .circle {
          --color: #7CBB30;
          --dim: 1.2rem;
          width: var(--dim);
          height: var(--dim);
          background-color: var(--color);
          border-radius: 50%;
          position: absolute;
        }

        .loader .circle:nth-child(1) {
          top: 0;
          left: 0;
        }

        .loader .circle:nth-child(2) {
          top: 0;
          right: 0;
        }

        .loader .circle:nth-child(3) {
          bottom: 0;
          left: 0;
        }

        .loader .circle:nth-child(4) {
          bottom: 0;
          right: 0;
        }

        @keyframes spin988 {
          0% {
            transform: scale(1) rotate(0);
          }
          20%, 25% {
            transform: scale(1.3) rotate(90deg);
          }
          45%, 50% {
            transform: scale(1) rotate(180deg);
          }
          70%, 75% {
            transform: scale(1.3) rotate(270deg);
          }
          95%, 100% {
            transform: scale(1) rotate(360deg);
          }
        }
        html, body {
          height: 100%;
          margin: 0;
          background: transparent;
        }
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          width: 100vw;
          overflow: hidden;
          background: transparent;
        }
      </style>
    </head>
    <body>
      <div class="loader">
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
        <div class="circle"></div>
      </div>
    </body>
    </html>
  `;

  return (
    <View style={{
      height: dimensions.height * 0.1,
      alignSelf: 'center',
      flex: 0,
      width: dimensions.width * 0.9,
    }}>
      <WebView
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState={false}
        scrollEnabled={false}
        showsHorizontalScrollIndicator={false}
        source={{ html: insilodia }}
        bounces={false}
        javaScriptEnabled={true}
        mixedContentMode="compatibility"
        showsVerticalScrollIndicator={false}
        domStorageEnabled={true}
        scalesPageToFit={false}
        style={{ width: '100%', backgroundColor: 'transparent', height: '100%', }}
        allowsInlineMediaPlayback={true}
      />
    </View>
  );
};

export default FigDoisRolling;