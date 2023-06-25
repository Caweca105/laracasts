'use strict';

import { users, currentUser } from './users.js';
import helper from './helper.js';

// document.getElementById('output').innerHTML = users[currentUser].name;

const userEmails = users.map(user => user.email);
document.getElementById('output').innerHTML = helper(userEmails).join(', ');