require("../styles/styles.scss");
import React from 'react';
import ReactDOM from 'react-dom'
var RecipeBook = React.createClass({
render: function() {
return (
<div>
Hello, world! I am a RecipeBook.
</div>
);
}
});

ReactDOM.render(
<RecipeBook />,
document.getElementById('app-container')
);