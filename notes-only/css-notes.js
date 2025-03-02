=== === === === === === === === === === === === === === === === === === === === 

CSS GRID

display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(2, auto);
grid-template-areas: "header header header" "main main sidebar";
grid-column-gap: 10px;
grid-row-gap: 10px;
gap: 10px;
grid-auto-flow: row;
grid-auto-columns: minmax(100px, auto);
grid-auto-rows: minmax(100px, auto);
place-content: center;
align-content: center;
justify-content: center;
place-items: center;
align-items: center;
justify-items: center;
grid-column: 1 / span 2;
grid-row: 1 / 2;
grid-area: header;


=== === === === === === === === === === === === === === === === === === === === 
CSS FLEXBOX

display: flex;
flex-direction: row;
flex-wrap: wrap;
flex-flow: row wrap;
justify-content: flex-start;
justify-content: flex-end;
justify-content: center;
justify-content: space-between;
justify-content: space-around;
justify-content: space-evenly;
align-items: flex-start;
align-items: flex-end;
align-items: center;
align-items: stretch;
align-content: flex-start;
align-content: flex-end;
align-content: center;
align-content: space-between;
align-content: space-around;
align-content: space-evenly;
flex-grow: 1;
flex-shrink: 1;
flex-basis: auto;
flex: 1 1 auto;
order: 1;