import { Routes, Route } from 'react-router-dom';

import { NewNotes } from '../pages/NewNotes';
import { Home } from '../pages/Home';
import { Profile } from '../pages/Profile';
import { Details } from '../pages/Details';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newNote" element={<NewNotes />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
        </Routes>
    );
}
