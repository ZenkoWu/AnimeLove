//determines the color of the rating of a certain entity (anime or manga), 
// if the rating is above 7 then the color is golden, if less than 5 then red

export const getScoreColor = (score: number) => (
    Math.round(score) > 7 && 'bg-warning' || 
    Math.round(score) < 5 && 'bg-danger'
)