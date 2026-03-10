CREATE TABLE users (
    -- Clerk based data
    id TEXT PRIMARY KEY UNIQUE NOT NULL,
    first_name TEXT,
    last_name TEXT,
    email TEXT UNIQUE NOT NULL,
    image_url TEXT,

    -- SocietySphere based data
    society_id TEXT,
    society_designation TEXT,
    phone_number TEXT,
    address TEXT,
    resident_type TEXT,
    gender TEXT CHECK (gender IN ('male', 'female', 'other')),
    dob DATE,
    status TEXT CHECK (status IN ('active', 'inactive', 'blocked')),
    created_at DATE DEFAULT CURRENT_DATE,
)