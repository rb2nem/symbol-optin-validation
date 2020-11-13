# symbol-optin-validation

## Overview

Run a small script in a networkless docker container to validate you have the private key corresponding to a Symbol address.

## Is this secure?

First things first: this is a script I wrote for my own use. You use it at your own risk.

Although the script is running in a docker container without any network connectivity, providing the private key of an account to the script still has some risks (eg it could be intercepted by malware infecting  the computer running the container). As a consequence, I can't take any responsibility if things go wrong when you use this script.

The script might also be buggy, you should review it to decide if you trust its results.

Remember that the private key is giving access to the corresponding account. If you feel unconfortable using this, just don't.

## Requirements

You need docker installed. You also need to have the Symbol address(es) and its(their) corresponding private key(s).


## How to run

The script prompts first for a symbol address, then asks for its private key (without printing it). It then prints if both do correspond or not, and then loops to ask for the next address to be validated.

### Cloning this repo on github
```
git clone https://github.com/rb2nem/symbol-optin-validation.git
cd symbol-optin-validation
./run.sh
```

## Running an image built on Docker Hub

Be sure to run it in a container without network connectivity. That way, even if a library used is compromised, it cannot communicate any information through the network.

```
docker run --rm -it --network none rb2nem/symbol-optin-validation
```


