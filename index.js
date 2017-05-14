//Code React element here
const header1 = React.createElement('h1', {}, 'An Awesome Person');
const paragraph = React.createElement('p', {}, 'Who is learning React');

const listItem1 = React.createElement('li', {}, 'JavaScript');
const listItem2 = React.createElement('li', {}, 'React');
const listItem3 = React.createElement('li', {}, 'Movies');
const listItem4 = React.createElement('li', {}, 'Ice cream');

const unorderedList = React.createElement('ul', { className: 'me__interests'}, [ listItem1, listItem2, listItem3, listItem4 ]);


const meInReact = React.createElement('div', { className: 'me' }, [ header1, paragraph, unorderedList]);

ReactDOM.render(
  meInReact,
  document.getElementById('main')
);
