### What requirements did you achieve?

I barely achieved the standard requirements.

### Were there any requirements or goals that you were unable to achieve? If so, what was it that you found difficult about these tasks?

From the initial set up, I was having issues with Render. Firstly, the server kept failing to deploy initially and kept saying "application exited early". Later on, I changed the POST request URL in the form to the Render URL instead of local host, and render presented another error "PathError: Missing parameter name at index 6".

When the initial root route was set up, I just set it up to display message saying "Server is up and running" and this was fine for the root route, but on Render, any endpoints other than the standard "/" weren't loading. The page just kept loading forever but never got to the end point and then ultimately the load timed out.

Then, I thought it would make more sense for me to be selecting data from the database on the root route as I was showing "popular recipes" on the home page. As soon as I did that, my server on render did not work at all. It continually gives me "TypeError: Invalid URL" for every deployment and no endpoints work, not even the root route. Everything was working fine on localhost, so I'm not sure what is causing these issues.

When testing the form to submit a new recipe, the form data was also not submitting to the database on Render. However it did work when using Postman to test my code.

I couldn't figure out how to extract the "tags" info for each recipe from the database, or give each recipe multiple tags.

I couldn't figure out how to use links to the dynamic routes. I wanted each recipe in the "popular recipes" on the home page and the recipes listed in the "all recipes" page to each link to their own recipe page.

I also don't know how to only select 1 row from the database for each individual recipe.

## Additional Reflections:

### Feedback requested:

If you can work out what is going on with my Render server, that would be really useful for future projects.

### What useful external sources helped you complete the assignment (e.g Youtube tutorials)?

- Kittl's free logo maker to design the logo.
- Google fonts for the font
- Figma to do some wireframes for the mobile views for each page.
- Trello to keep track of my tasks.
