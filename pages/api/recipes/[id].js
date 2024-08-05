import { recipes } from '../../../data/recipes';

export default function handler(req, res) {
  const { id } = req.query;
  const recipe = recipes.find(recipe => recipe.id === parseInt(id));

  if (recipe) {
    res.status(200).json(recipe);
  } else {
    res.status(404).end(); // Not Found
  }
}
