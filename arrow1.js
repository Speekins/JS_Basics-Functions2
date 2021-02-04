/*Refactor the function below using arrow syntax. 
Line 9 should still log the same sentence.*/

const template = 'I VERB NOUN.';

/*function sentence(verb, noun) {
  return template
    .replace('VERB', verb)
    .replace('NOUN', noun);
}*/


// logs: I like birds.

let sentence = (verb, noun) => template
  .replace('VERB', verb)
  .replace('NOUN', noun);

console.log(sentence('like', 'birds'));