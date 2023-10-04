import Document, { DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components';

/**
 * Custom document for styled components SSR
 * ref: https://github.com/vercel/next.js/tree/canary/examples/with-styled-components
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      }
    } finally {
      sheet.seal()
    }
  }
}
