# Setplex Node.js SDK

The Setplex Node.js SDK provides convenient access to the Setplex API from applications written in server-side JavaScript.

## **Documentation**

For detailed information on the Setplex API and how to use this SDK effectively, please refer to our comprehensive API documentation on [Developers Portal](http://developers.setplex.com/). The documentation includes in-depth guides, endpoint reference, and code examples to assist you in harnessing the full potential of Nora's services.

## Requirements

Node.js 16 or higher.

## Installation

To get started with the Setplex API SDK, just add it in your project via `npm` or `yarn`

```bash
npm install bldsoft/setplex-api-nodejs
```

```bash
yarn add bldsoft/setplex-api-nodejs
```

## **Usage**

Before you can start using the SDK, make sure to configure your Nora API credentials. 

Require it with token, login and your domain values:

```jsx
const { NoraAPI } = require('setplex-api-nodejs');

const api = new NoraAPI({
  baseURL: 'YOUR_BASEURL',
  token: 'YOUR_TOKEN',
  login: 'YOUR_LOGIN',
});

api.subscriptions.get()
  .then(({ result }) => result.map(subscription => console.log(subscription)))
  .catch(error => console.error(error));
```

Or using ES modules and `async`/`await`:

```jsx
import { NoraAPI } from 'setplex-api-nodejs';

const api = new NoraAPI({
  baseURL: 'YOUR_BASEURL',
  token: 'YOUR_TOKEN',
  login: 'YOUR_LOGIN',
});

const response = await api.subscriptions.get();
response.result.map(subscription => console.log(subscription));
```

Once you've installed the SDK and configured your credentials, you can begin integrating API into your projects. Explore the SDK's sample code for guidance on how to perform various API operations, from retrieving subscriptions and content additions to managing payment transactions.


## **License**

This SDK is open-source software licensed under the MIT License. See the [**LICENSE**](https://github.com/bldsoft/setplex-api-nodejs/blob/main/LICENSE.md) file for more information.
