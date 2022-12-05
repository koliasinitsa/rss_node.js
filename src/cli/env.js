const parseEnv = (flag) => {
 
// enter v console npx cross-env SOME=any RSS_foo=bar RSS_bar=baz node src/cli/env.js

   Object.entries(process.env).forEach(([key, value]) => {
      if (key.indexOf(flag) === 0) {
         console.log(`${key}=${value}`);
      }
   })

};
    

parseEnv('RSS_');
