export const CustomerService = {
    getData() {
        return [
            {
                id: 1001,
                name: 'Josephine Darakjy',
                country: {
                    name: 'Egypt',
                    code: 'eg'
                },
                company: 'Chanay, Jeffrey A Esq',
                date: '2019-02-09',
                status: 'proposal',
                verified: true,
                activity: 0,
                representative: {
                    name: 'Amy Elsner',
                    image: 'amyelsner.png'
                },
                balance: 82429
            },
            {
                id: 1002,
                name: 'Art Venere',
                country: {
                    name: 'Panama',
                    code: 'pa'
                },
                company: 'Chemel, James L Cpa',
                date: '2017-05-13',
                status: 'qualified',
                verified: false,
                activity: 63,
                representative: {
                    name: 'Asiya Javayant',
                    image: 'asiyajavayant.png'
                },
                balance: 28334
            },
            {
                id: 1003,
                name: 'Lenna Paprocki',
                country: {
                    name: 'Slovenia',
                    code: 'si'
                },
                company: 'Feltz Printing Service',
                date: '2020-09-15',
                status: 'new',
                verified: false,
                activity: 37,
                representative: {
                    name: 'Xuxue Feng',
                    image: 'xuxuefeng.png'
                },
                balance: 88521
            },
            {
                id: 1006,
                name: 'Mitsue Tollner',
                country: {
                    name: 'Paraguay',
                    code: 'py'
                },
                company: 'Morlong Associates',
                date: '2018-02-19',
                status: 'renewal',
                verified: true,
                activity: 54,
                representative: {
                    name: 'Ivan Magalhaes',
                    image: 'ivanmagalhaes.png'
                },
                balance: 58706
            },
            {
                id: 1007,
                name: 'Leota Dilliard',
                country: {
                    name: 'Serbia',
                    code: 'rs'
                },
                company: 'Commercial Press',
                date: '2019-08-13',
                status: 'renewal',
                verified: true,
                activity: 69,
                representative: {
                    name: 'Onyama Limba',
                    image: 'onyamalimba.png'
                },
                balance: 26640
            },
            {
                id: 1008,
                name: 'Sage Wieser',
                country: {
                    name: 'Egypt',
                    code: 'eg'
                },
                company: 'Truhlar And Truhlar Attys',
                date: '2018-11-21',
                status: 'unqualified',
                verified: true,
                activity: 76,
                representative: {
                    name: 'Ivan Magalhaes',
                    image: 'ivanmagalhaes.png'
                },
                balance: 65369
            },
            {
                id: 1009,
                name: 'Kris Marrier',
                country: {
                    name: 'Mexico',
                    code: 'mx'
                },
                company: 'King, Christopher A Esq',
                date: '2015-07-07',
                status: 'proposal',
                verified: false,
                activity: 3,
                representative: {
                    name: 'Onyama Limba',
                    image: 'onyamalimba.png'
                },
                balance: 63451
            }
        ];
    },

    getCustomersSmall() {
        return Promise.resolve(this.getData().slice(0, 10));
    },

    getCustomersMedium() {
        return Promise.resolve(this.getData().slice(0, 50));
    },

    getCustomersLarge() {
        return Promise.resolve(this.getData().slice(0, 200));
    },

    getCustomersXLarge() {
        return Promise.resolve(this.getData());
    },

    getCustomers(params) {
        const queryParams = params
            ? Object.keys(params)
                  .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
                  .join('&')
            : '';

        return fetch('https://www.primefaces.org/data/customers?' + queryParams).then((res) => res.json());
    }
};
