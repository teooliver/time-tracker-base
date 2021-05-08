import { rest } from 'msw';
import { API_URL } from '../utils/api-client';

export const handlers = [
  rest.get(`${API_URL}/projects`, (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json([
        {
          _id: 'Beer - Steuber',
          projects: [
            {
              _id: '6096a0660fc35b00219a2e70',
              name: 'sfdfsdfs',
              color: 'white',
              clientName: 'Beer - Steuber',
            },
            {
              _id: '6096a05a0fc35b00219a2e59',
              name: 'deserunt possimus',
              color: '#b47aeaff',
              clientName: 'Beer - Steuber',
              estimate: '',
              status: '',
            },
            {
              _id: '6096a05a0fc35b00219a2e5a',
              name: 'sed dolorem',
              color: '#bd93d8ff',
              clientName: 'Beer - Steuber',
              estimate: '',
              status: '',
            },
          ],
        },
        {
          _id: 'Reichel, Doyle and Haley',
          projects: [
            {
              _id: '6096a05a0fc35b00219a2e57',
              name: 'laboriosam veritatis',
              color: '#b47aeaff',
              clientName: 'Reichel, Doyle and Haley',
              estimate: '',
              status: '',
            },
          ],
        },
        {
          _id: 'Crist - Roberts',
          projects: [
            {
              _id: '6096a05a0fc35b00219a2e58',
              name: 'tempore nam',
              color: '#b47aeaff',
              clientName: 'Crist - Roberts',
              estimate: '',
              status: '',
            },
          ],
        },
        {
          _id: 'Ferry, Murazik and Jones',
          projects: [
            {
              _id: '6096a0710fc35b00219a2e71',
              name: 'dfgdfgdf',
              color: 'white',
              clientName: 'Ferry, Murazik and Jones',
            },
          ],
        },
        {
          _id: 'Cartwright, Beier and Bayer',
          projects: [
            {
              _id: '6096a05a0fc35b00219a2e5b',
              name: 'voluptas debitis',
              color: '#bd93d8ff',
              clientName: 'Cartwright, Beier and Bayer',
              estimate: '',
              status: '',
            },
          ],
        },
      ])
    );
  }),
  rest.get(`${API_URL}/clients`, (req, res, ctx) => {
    return res(
      ctx.status(200),

      ctx.json([
        {
          _id: '6096a05a0fc35b00219a2e52',
          name: 'Test Client 1',
          createdAt: '2021-05-08T14:29:46.602Z',
          updatedAt: '2021-05-08T14:29:46.602Z',
          __v: 0,
        },
        {
          _id: '6096a05a0fc35b00219a2e53',
          name: 'Test Client 2',
          createdAt: '2021-05-08T14:29:46.603Z',
          updatedAt: '2021-05-08T14:29:46.603Z',
          __v: 0,
        },
        {
          _id: '6096a05a0fc35b00219a2e54',
          name: 'Cartwright, Beier and Bayer',
          createdAt: '2021-05-08T14:29:46.603Z',
          updatedAt: '2021-05-08T14:29:46.603Z',
          __v: 0,
        },
        {
          _id: '6096a05a0fc35b00219a2e55',
          name: 'Beer - Steuber',
          createdAt: '2021-05-08T14:29:46.603Z',
          updatedAt: '2021-05-08T14:29:46.603Z',
          __v: 0,
        },
        {
          _id: '6096a05a0fc35b00219a2e56',
          name: 'Crist - Roberts',
          createdAt: '2021-05-08T14:29:46.603Z',
          updatedAt: '2021-05-08T14:29:46.603Z',
          __v: 0,
        },
      ])
    );
  }),
];
