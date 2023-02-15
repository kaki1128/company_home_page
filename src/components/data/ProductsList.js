import Inspection from '../assets/image/Inspection.png'
import Diary from '../assets/image/Diary.png'
import EDMS from '../assets/image/EDMS.png'
import BIM from '../assets/image/BIM.png'
import KMS from '../assets/image/KMS.png'
import Analyse from '../assets/image/Analyse.png'
import Procurement from '../assets/image/Procurement.png'
import PhotoReg from '../assets/image/PhotoReg.png'
import Signature from '../assets/image/Signature.png'
import Inspection_i from '../assets/image/inspection_s_icon.png'
import Diary_i from '../assets/image/diary_s_icon.png'
import EDMS_i from '../assets/image/EDMS_s_icon.png'
import BIM_i from '../assets/image/BIM_s_icon.png'
import KMS_i from '../assets/image/KMS_s_icon.png'
import Analyse_i from '../assets/image/analyse_s_icon.png'
import Procurement_i from '../assets/image/procurement_s_icon.png'
import PhotoReg_i from '../assets/image/pr_s_icon.png'
import Signature_i from '../assets/image/sign_s_icon.png'

const productsList = [
    {
        link: "/product/Inspection",
        img: Inspection,
        icon: Inspection_i,
        bgColor: '#28626D',
        className: 'Inspection',
        Mobile: true,
        Desktop: true,
        type: 'Digital Works Supervision System (DWSS)',
        name: 'Cerebro Inspection',
        des: 'All in one digital platform to achieve paperless and automated inspection.',
        tags: ['Inspection', 'Site Management', 'DWSS', 'Safety', 'Survey', 'Quality', 'Environmental', 'Mobile Application', 'Web Application'],
    },
    {
        link: "/product/Diary",
        img: Diary,
        icon: Diary_i,
        bgColor: '#5CD4EF',
        className: 'Diary',
        Mobile: 'none',
        Desktop: true,
        type: 'Digital Works Supervision System (DWSS)',
        name: 'Cerebro Diary',
        des: 'Digital Site Diary platform to record daily site activities, with no hassle.',
        tags: ['Site Diary', 'Site Management', 'DWSS', 'Safety', 'Quality', 'Site Activities', 'Labour Management', 'Web Application'],
    },
    {
        link: "/product/EDMS",
        img: EDMS,
        icon: EDMS_i,
        bgColor: '#3A3A3A',
        className: 'EDMS',
        Mobile: 'none',
        Desktop: true,
        type: 'Electronic Document Management System',
        name: 'Cerebro Project',
        des: 'Integrated platform to secure, organise and update company documents and drawings.',
        tags: ['EDMS', 'Project Management', 'Document Management', 'Web Application'],
    },
    {
        link: "/product/BIM",
        img: BIM,
        icon: BIM_i,
        bgColor: '#221E57',
        className: 'BIM',
        Mobile: 'none',
        Desktop: true,
        type: '',
        name: 'BIM',
        des: '3D illustration of full building lifecycle for building assets.',
        tags: ['BIM', '3D Modelling'],
    },
    {
        link: "/product/KMS",
        img: KMS,
        icon: KMS_i,
        bgColor: '#30C2CA',
        className: 'KMS',
        Mobile: 'none',
        Desktop: true,
        type: '',
        name: 'Knowledge Management System',
        des: 'Centralized knowledge sharing platform for all project information and know-hows.',
        tags: ['Project Management', 'Knowledge Management', 'Web Application', 'Knowledge Sharing'],
    },
    {
        link: "/product/Analyse",
        img: Analyse,
        icon: Analyse_i,
        bgColor: '#1D1429',
        className: 'Analyse',
        Mobile: 'none',
        Desktop: true,
        type: '',
        name: 'Cerebro Analyse',
        des: 'Electronic construction budgeting and estimation software.',
        tags: ['Project Management', 'Budget', 'Estimation', 'Cost Management', 'Web Application'],
    },
    {
        link: "/product/Procurement",
        img: Procurement,
        icon: Procurement_i,
        bgColor: '#1E3957',
        className: 'Procurement',
        Mobile: true,
        Desktop: true,
        type: '',
        name: 'Cerebro Procurement',
        des: 'Full-fledged digital platform to manage vendor and material sourcing.',
        tags: ['Procurement', 'Project Management', 'Sourcing', 'Material', 'Site Management', 'Subcontractor', 'Quantity Surveying', 'Web Application'],
    },
    {
        link: "/product/PhotoReg",
        img: PhotoReg,
        icon: PhotoReg_i,
        bgColor: '#3D3D3D',
        className: 'PhotoReg',
        Mobile: true,
        Desktop: 'none',
        type: 'Cerebro Project',
        name: 'Photo Registration',
        des: 'Affiliated cloud-based photo upload and register mobile application.',
        tags: ['Project Management', 'Photo Storage', 'Site Management', 'Mobile Application'],
    },
    {
        link: "/product/Signature",
        img: Signature,
        icon: Signature_i,
        bgColor: '#2B2969',
        className: 'Signature',
        Mobile: true,
        Desktop: true,
        type: '',
        name: 'Signature App',
        des: 'United signature application for all Cerebro platforms.',
        tags: ['Site Management', 'Project Management', 'E-signature', 'Mobile Application'],
    }
];

export default productsList;