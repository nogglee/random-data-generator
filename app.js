import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { faker } from '@faker-js/faker';
import createRandomUser from './random-user-generator.js';

const app = express();

app.use(express.json());

app.get
(
    '/fake/users/:cnt', (req, res) =>
    {
        const cnt = parseInt(req.params.cnt);
        const users = faker.helpers.multiple(createRandomUser, { count: cnt, });

        if(cnt > 0) res.status(StatusCodes.OK).json(users);
        else res.status(StatusCodes.BAD_REQUEST).json({ message : '데이터는 1set 이상 요청 할 수 있습니다.' })
    }
);

app.listen('5555')