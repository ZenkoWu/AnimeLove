export const getScoreColor = (element) => Math.round(element.score) > 7 && 'bg-warning' || 
    Math.round(element.score) < 5 && 'bg-danger'
