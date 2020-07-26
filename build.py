import os
import json

with open('redirects.json','r') as f:
    redirects = f.read()

for i in redirects['redirectRules']:
    block = f"""if {i['conditions']} {{{i['transformation']};
    return Response.redirect(location, 301);}}"""