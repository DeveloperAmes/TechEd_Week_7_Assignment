issue with render - multiple issues with deploying server. First the server kept failing to deploy initially and kept saying "application exited early". Later on I changed POST request URL in the form to the render one URL instead of local host and render presented another error "PathError: Missing parameter name at index 6". When the initial root route was set up I just presented with a message saying "Server is up and running" and this was fine for the root route but any endpoints other than the standard "/" weren't loading on render. The page just keeps loading forever but never got to the end point and then ultimately the load timed out. Then I thought it would make more sense for me to be selecting data from the database on the root route as I was showing "popular recipes" on the home page. As soon as I did that, my server on render did not work at all. It continually gives me "TypeError: Invalid URL" for every deployment and no endpoints work, not even the root route. Everything was working fine on localhost, so I'm not sure what is causing these issues.

form data not submitting to database on render but is using postman post request

couldn't figure out how to extract the tags info for each recipe or give each recipe multiple tags.

Used Kittl logo maker to design the logo.

can't figure out how to use links to the dynamic routes. I wanted each recipe in the popular recipes and all recipes parts to each link to their own recipe page but wrapping them in links with a path to the dynamic route didn't work.

I also don't know how to only select 1 row from the database for each individual recipe.
