const express = require('express'); // import
const expressGraphQl = require('express-graphql');
const port = 4800; // init khởi tạo port 4800
const app = express();
const schema = require('./schema/schema');
const cors = require('cors');

// Allow cross-origin
app.use(cors()); // cors cung cấp middleware cho Express 

app.use('/', expressGraphQl({
    schema,
    graphiql: true
}))

app.listen(port, () => {
    console.log(`Đang chạy port ${port}`); // console log ra CLI cho biết đang port 4800
})
