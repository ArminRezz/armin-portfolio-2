import React from 'react';
import Skills from '../Components/Skills';
import { MainLayout} from '../styles/Layouts';
import Resume from '../Components/Resume';

function ResumePage({id}) {
    return (
        <MainLayout id={id}>
            <Skills />
            <Resume />
        </MainLayout>
    )
}

export default ResumePage
