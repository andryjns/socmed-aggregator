# hacktivgit

For SERVER

Route                           HTTP        Description
====================================================================================
/repo/list                      GET         Get starred repos of signed-in user
/repo/create                    POST        Create repo in signed-in user profile
/repo/search/:name              GET         Get list repo by username
/repo/unstar/:owner/:repo       DELETE      Unstar repo