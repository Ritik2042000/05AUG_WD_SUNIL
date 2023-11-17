import { NavLink } from 'react-router-dom';
import { AiOutlineStop } from "react-icons/ai";
import { FaCheck } from "react-icons/fa6";

export const data = {
    IndividualUserData: {
        data: [

            {
                id: 1,
                name: 'Ghostbusters',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 2,
                name: 'admin',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',

            },
            {
                id: 3,
                name: 'jurist',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',

            },
        ],
        columns: [
            {
                name: "SR. NO",
                selector: (row) => row.id,
                sortable: true,
                width: "120px",
            },
            {
                name: 'NAME',
                // selector: row => row.name,
                cell: (d) => (
                    <NavLink to='/users/userdetalis' >
                        {d.name}
                    </NavLink>),

                sortable: true,
            },
            {
                name: 'EMAIL',
                selector: row => row.email,
                sortable: true,
            },
            {
                name: 'PHONE',
                selector: row => row.mbnumber,
                sortable: true,
            },
            {
                name: 'STATUS',
                cell: (row) => (
                    <FaCheck className="edit-icon text-success" />
                ),
                sortable: true,
            },
            {
                name: 'CREATED DATE & TIME',
                selector: row => row.datentime,
                sortable: true,
            },

        ]
    },
    BussinessUserData: {
        data: [
            {
                id: 1,
                name: 'Ghostbusters',
                companyname: 'New Home Private',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 2,
                name: 'admin',
                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',

            },
            {
                id: 3,
                name: 'jurist',
                companyname: 'Stream Private Limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '09-09-2023 | 00:50',
            },
            {
                id: 4,
                name: 'Andrew strauss',
                companyname: 'Stream Private Limited',
                email: 'lahagehdf2436@synclane.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '31-09-2023 | 10:50',
            },
            {
                id: 5,
                name: 'Ellyse Perry',
                companyname: 'Stream Private Limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 6,
                name: 'Mathew Patron',
                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '10-12-2023 | 00:50',
            },
            {
                id: 7,
                name: 'Fin Alean',
                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '25-10-2023 | 20:50',
            },
            {
                id: 8,
                name: 'Bhagy detroja',
                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '03-10-2023 | 00:30',
                companyname: 'New Home Private',
            },
            {
                id: 9,
                name: 'Bhagy detroja',
                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '12-09-2023 | 00:40',
            },
            {
                id: 10,
                name: 'soham detroja',
                companyname: 'second Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',
            },
        ],
        columns: [
            {
                name: "SR. NO",
                selector: (row) => row.id,
                sortable: true,
                width: "120px",
              },
            {
                name: 'NAME',
                // selector: row => row.name,
                cell: (d) => (
                    <NavLink to='/users/userdetalis' >
                        {d.name}
                    </NavLink>),
                sortable: true,
            },
            {
                name: 'COMPANY NAME',
                selector: row => row.companyname,
                sortable: true,
            },
            {
                name: 'EMAIL',
                selector: row => row.email,
                sortable: true,
            },
            {
                name: 'CONTACT NUMBER',
                selector: row => row.mbnumber,
                sortable: true,
            },
            {
                name: 'STATUS',
                cell: (row) => (
                    <FaCheck className="edit-icon text-success" />
                ),
                sortable: true,
            },
            {
                name: 'CREATED DATE & TIME',
                selector: row => row.datentime,
                sortable: true,
            },

        ]
    },
    BussinessAdminData: {
        data: [
            {
                id: 1,
                companyname: 'New Home Private',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 2,
                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',

            },
            {
                id: 3,
                companyname: 'Stream Private Limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '09-09-2023 | 00:50',
            },
            {
                id: 4,

                companyname: 'Stream Private Limited',
                email: 'abcdef2436@synclane.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '31-09-2023 | 10:50',
            },
            {
                id: 5,

                companyname: 'Stream Private Limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 6,

                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '10-12-2023 | 00:50',
            },
            {
                id: 7,

                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '25-10-2023 | 20:50',
            },
            {
                id: 8,

                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '03-10-2023 | 00:30',
                companyname: 'New Home Private',
            },
            {
                id: 9,
                companyname: 'First Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '12-09-2023 | 00:40',
            },
            {
                id: 10,
                companyname: 'second Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',

            },
            {
                id: 11,
                companyname: 'third Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',

            },
            {
                id: 12,
                companyname: 'fouth Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',

            },
            {
                id: 13,
                companyname: 'fifth Private limited',
                email: 'test@test.com',
                mbnumber: '9999999999',
                // status: '1984',
                datentime: '13-10-2023 | 00:50',

            },

        ],
        columns: [
            {
                name: "SR. NO",
                selector: (row) => row.id,
                sortable: true,
                width: "120px",
            },
            {
                name: 'COMPANY NAME',
                selector: row => row.companyname,
                cell: (d) => (
                    <NavLink to='/users/businessadmin
                    ' >
                        {d.companyname}
                    </NavLink>),
                sortable: true,
            },
            {
                name: 'EMAIL',
                selector: row => row.email,
                sortable: true,
            },
            {
                name: 'CONTACT NUMBER',
                selector: row => row.mbnumber,
                sortable: true,
            },
            {
                name: 'STATUS',
                cell: (row) => (
                    <FaCheck className="edit-icon text-success" />
                ),
                sortable: true,
                width: '90px',
            },
            {
                name: 'CREATED DATE & TIME',
                selector: row => row.datentime,
                sortable: true,
            },
        ]
    },
    InvitedUserData: {
        data: [
            {
                id: 1,
                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 2,
                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '13-10-2023 | 00:50',

            },
            {
                id: 3,
                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '09-09-2023 | 00:50',
            },
            {
                id: 4,

                email: 'lahagehdf2436@synclane.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '31-09-2023 | 10:50',
            },
            {
                id: 5,

                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 6,

                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '10-12-2023 | 00:50',
            },
            {
                id: 7,

                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '25-10-2023 | 20:50',
            },
            {
                id: 8,
                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '12-09-2023 | 00:40',
            },
            {
                id: 9,
                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '12-09-2023 | 00:40',

            },
            {
                id: 10,
                email: 'test@test.com',
                mbnumber: '9999999999',

                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '13-10-2023 | 00:50',

            },
        ],
        columns: [
            {
                name: "SR. NO",
                selector: (row) => row.id,
                sortable: true,
                width: "120px",
            },
            {
                name: 'EMAIL',
                selector: row => row.email,
                sortable: true,
            },
            {
                name: 'CONTACT NUMBER',
                selector: row => row.mbnumber,
                sortable: true,
                width: '140px',
            },
            {
                name: 'STATUS',
                cell: (row) => (
                    <AiOutlineStop className="edit-icon text-danger" />
                ),
                sortable: true,
                width: '90px',
            },

            {
                name: 'INVITE LINK',
                selector: row => row.invitelink,
                sortable: true,
            },
            {
                name: 'CREATED DATE & TIME',
                selector: row => row.datentime,
                sortable: true,
            },
        ]
    },
    InvitedBusinessData: {
        data: [
            {
                id: 1,
                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 2,
                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '13-10-2023 | 00:50',

            },
            {
                id: 3,
                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '09-09-2023 | 00:50',
            },
            {
                id: 4,

                email: 'lahagehdf2436@synclane.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '31-09-2023 | 10:50',
            },
            {
                id: 5,

                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '13-10-2023 | 00:50',
            },
            {
                id: 6,

                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '10-12-2023 | 00:50',
            },
            {
                id: 7,

                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '25-10-2023 | 20:50',
            },
            {
                id: 8,
                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '12-09-2023 | 00:40',
            },
            {
                id: 9,
                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '12-09-2023 | 00:40',

            },
            {
                id: 10,
                email: 'test@test.com',
                companyname: 'AI YASHRAJ FOOD',
                // status: '1984',
                invitelink: 'https://versionview.com/aijurist/en',
                datentime: '13-10-2023 | 00:50',

            },
        ],
        columns: [
            {
                name: "SR. NO",
                selector: (row) => row.id,
                sortable: true,
                width: "120px",
            },
            {
                name: 'COMPANY NAME',
                selector: row => row.companyname,
                sortable: true,
            },
            {
                name: 'EMAIL',
                selector: row => row.email,
                sortable: true,
            },
            {
                name: 'STATUS',
                cell: (row) => (
                    <AiOutlineStop className="edit-icon text-danger" />
                ),
                sortable: true,
                width: '90px',
            },
            {
                name: 'INVITE LINK',
                selector: row => row.invitelink,
                sortable: true,
            },
            {
                name: 'CREATED DATE & TIME',
                selector: row => row.datentime,
                sortable: true,
            },

        ]
    }
};
