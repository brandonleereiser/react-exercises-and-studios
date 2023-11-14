import styles from './Description.module.css';
import React from 'react';

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>Thai Papaya salad</h1>
                    <p>Fresh unripe papaya shredded with a spicy fish sauce</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

function RecipeAuthor() {
   let authorLink = "https://hot-thai-kitchen.com/papaya-salad-v3/";
   let authorPhoto = "https://hot-thai-kitchen.com/wp-content/uploads/2021/01/Untitled-design-2-720x405.png";
   let authorName = "Chef Pai";

   return (
    <div className = {styles.recipeAuthorBlock}>
       <img src={authorPhoto} alt = "Chef Pai" className={styles.imageUpdates} />
       <div>
          <h3>{authorName}</h3>
          <a href={authorLink}>Chef Pais website</a> 
       </div>
    </div>
 );
}

export default RecipeDescription; 