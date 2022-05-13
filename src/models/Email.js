import Database from '../db/database.js';

async function read(id){
    const db = await Database.connect();
  
    const sql = `
      SELECT
        *
      FROM
        email
      WHERE
        id = ?
    `;
  
    const emailid= await db.get(sql, [id]);

    const email = emailid.Email;

    return email;
};

async function create(email) {

    const name = email.firstlastname
    const splitname = name.split(" ");
    const firstname = splitname[0];
    const lastname = splitname[1];
    const domain = email.tipo + ".com" ;
    const db = await Database.connect()

    for (var i=0; i<domain.length;i = i+1){
        const e1 = firstname + "@" + domain;
        const e2 = firstname + lastname + "@" + domain;
        const e3 = firstname + "." + lastname + "@" + domain;
        const e4 = firstname.charAt(0) + lastname + "@" + domain;
        const e5 = firstname.charAt(0) + "." + lastname + "@" + domain;
        const e6 = firstname + lastname.charAt(1) + "@" + domain;
        const e7 = firstname + "." + lastname.charAt(0) + "@" + domain;
        const e8 = firstname.charAt(0) + lastname.charAt(0) + "@" + domain;
        const e9 = firstname + "_" + lastname + "@" + domain;
        const e10 = firstname.charAt(0) + "_" + lastname + "@" + domain;
        const e11 = lastname + firstname + "@" + domain;
        const e12 = lastname + "." + firstname + "@" + domain;    
        const e13 = lastname + firstname.charAt(0) + "@" + domain;
        const e14 = lastname + "." + firstname.charAt(0) + "@" + domain;
        
        const addresses = [e1, e2, e3, e4, e5, e6, e7, e8, e9, e10, e11, e12, e13, e14] ;

        const address = addresses[Math.floor(Math.random() * addresses.length)];
        
        const Email = address ;

        const sql = `
        INSERT INTO 
          email (Email)
        VALUES
          (?)
        `;

        const {lastID} = await db.run(sql, [Email]);

        return read(lastID);
    };
};

export default {create, read};