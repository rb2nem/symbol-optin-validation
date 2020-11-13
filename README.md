# symbol-optin-validation

## Overview

Run a small script in a networkless docker container to validate you have the private key corresponding to a Symbol address.

## Requirements

You need and docker installed. You also need to have the Symbol address and its corresponding private key.

## How to

```
git clone https://github.com/rb2nem/symbol-optin-validation.git
cd symbol-optin-validation
./run.sh
```

## Is this secure?

First things first: this is a script I wrote for my own use. You use it at your own risk.
Although the script is running in a docker container without any network connectivity, providing the private key of an account to the script still has some risks (eg it could be intercepted by malware infecting  the computer running the container). As a consequence, I can't take any responsibility if things go wrong when you use this script.
The script might also be buggy, you should review it to decide if you trust its results.
Remember that the private key is giving access to the corresponding account. If you feel unconfortable using this, just don't.
