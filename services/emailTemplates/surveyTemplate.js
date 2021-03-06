const keys = require('../../config/keys');

module.exports = ({ body, id }) => {
  return `
    <html>
      <body>
        <div style="text-align: center;">
          <h1>We'd like your feedback!</h1>
          <p>Please answer the following question:</p>
          <p>${body}</p>
          <div>
            <a href="${keys.domain}/api/surveys/${id}/yes">Yes</a>
          </div>
          <div>
            <a href="${keys.domain}/api/surveys/${id}/no">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
