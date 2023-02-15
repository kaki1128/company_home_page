import Analyse from '../assets/image/analyse_bg.png'
import AnalyseIcon from '../assets/image/analyse_icon.png'
import Analyse1 from '../assets/image/analyse_0.png'
import Inspection from '../assets/image/inspection_bg.png'
import InspectionIcon from '../assets/image/inspection_icon.png'
import Inspection1 from '../assets/image/inspecion_0.png'
import Inspection2 from '../assets/image/inspection_1.png'
import Inspection3 from '../assets/image/inspection_2.png'
import Inspection4 from '../assets/image/inspection_3.png'
import Diary from '../assets/image/diary_bg.png'
import DiaryIcon from '../assets/image/diary_icon.png'
import Diary1 from '../assets/image/diary_0.png'
import Diary2 from '../assets/image/diary_1.png'
import Diary3 from '../assets/image/diary_2.png'
import Diary4 from '../assets/image/diary_3.png'
import EDMS from '../assets/image/prj_bg.png'
import EDMSIcon from '../assets/image/prj_icon.png'
import EDMS1 from '../assets/image/prj_0.png'
import EDMS2 from '../assets/image/prj_1.png'
import EDMS3 from '../assets/image/prj_2.png'
import BIM from '../assets/image/BIM_bg.png'
import BIMIcon from '../assets/image/BIM_icon.png'
import BIM1 from '../assets/image/BIM_0.png'
import KMS from '../assets/image/KMS_bg.png'
import KMSIcon from '../assets/image/KMS_icon.png'
import KMS1 from '../assets/image/KMS_0.png'
import Procurement from '../assets/image/procurment_bg.png'
import ProcurementIcon from '../assets/image/procurment_icon.png'
import Procurement1 from '../assets/image/procurement_0.png'
import PhotoReg from '../assets/image/pr_bg.png'
import PhotoRegIcon from '../assets/image/pr_icon.png'
import Signature from '../assets/image/sign_bg.png'
import SignatureIcon from '../assets/image/sign_icon.png'
import PhotoReg1 from '../assets/image/pr_0.png'
import Signature1 from '../assets/image/sign_0.png'
import Poster from '../assets/image/BIM-Video.jpg'

const productJson = {
    Inspection:{
        bg:Inspection,
        mobile:true,
        bgColor:'rgba(18,4,63,0.58)',
        icon:InspectionIcon,
        desktop:true,
        image:'',
        type:'Digital Works Supervision System (DWSS)',
        name:'Cerebro Inspection',
        overview:'A barrier-free inspection platform for all types of inspections and workflows. All inspections are conducted via smartphones, tablets or web browsers with selections of straightforward drop down options and check boxes with photo capture and upload function, streamlining inspection activities.',
        details:{
            details1:{
                image:Inspection1,
                title:'Paperless Inspection',
                des:'On Cerebro Inspection, all inspection records will be submitted and completed digitally, without single use of paper. All records will be stored on clouds - so no more losing of inspection records!'
            },
            details2:{
                image:Inspection2,
                title:'Instant Photo Capture & Attach',
                des:'With a camera equipped phone, site photos can be captured and attached to the digital inspection form directly. For easy reference, you can even add sketches or annotation to the image.'
            },
            details3:{
                image:Inspection3,
                title:'Real Time Inspection Insight',
                des:'Inspection records will be consolidated and analysed as key performance indicators (KPI)  for project supervisors to tackle on underperformed inspection categories. Reports can be exported and downloaded as PDF and Excel format.'
            },
            details4:{
                image:Inspection4,
                title:'Trackable Inspection Records',
                des:'All inspections records are time stamped and electronically signed with names and positions to ensure all responsibility and accountability can be tracked.'
            },
        },
        table:[],
        projects:'',
    },
    Diary:{
        bg:Diary,
        mobile:"none",
        desktop:true,
        image:'',
        icon:DiaryIcon,
        type:'Digital Works Supervision System (DWSS)',
        name:'Cerebro Diary',
        overview:'A paperless site diary platform to record daily construction records. With a few steps, site staff will be able to record every site details ranging from manpower to equipment, along with report export function to generate comprehensive reports which are in compliance with construction practice.',
        details:{
            details1:{
                image:Diary1,
                title:'Digital Site Diary',
                des:'Create, record, review and endorse site diary form digitally with any device, any time and anywhere.',
            },
            details2:{
                image:Diary2,
                title:'Synced Attendance Record',
                des:'Support on site attendance record synchronized to Cerebro Diary.'
            },
            details3:{
                image:Diary3,
                title:'Auto Weather Prefill',
                des:'Weather data is extracted from the local weather observatory and prefilled on a digital site diary. '
            },
            details4:{
                image:Diary4,
                title:'GF527 & GF527A Reports Exports',
                des:'Reports can be generated and exported as GF527 and GF527A reports on the monthly return of construction site employment statistics. '
            },
        },
        table:[],
        projects:'',
    },
    EDMS:{
        bg:EDMS,
        mobile:"none",
        desktop:true,
        icon:EDMSIcon,
        image:'',
        type:'Electronic Document Management System',
        name:'Cerebro Project',
        overview:'An all-in-one platform to centralise, organise and update company documents and drawings. More than a document filing system, our platform combines storage and assignment to ensure hassle free document handling. ',
        details:{
            details1: {
                image:EDMS1,
                title:'Document Storage & Assignment',
                des:'Unified platform to manage document handling for clients and vendors.',
            },
            details2:{
                image:EDMS2,
                title:'Task Manager',
                des:'Task alerts will be sent specifically to users if actions need to be taken from the users, to make sure tasks are completed correctly and promptly.'
            },
            details3:{
                image:EDMS3,
                title:'Search Engine',
                des:'Highlighted search results shown on result pages facilitate users to efficiently locate the information needed.'
            },
        },
        table:[],
        projects:'',
    },
    BIM:{
        bg:BIM,
        mobile:"none",
        desktop:true,
        icon:BIMIcon,
        type:'',
        name:'BIM',
        image:BIM1,
        overview:'We offer Building Information Modelling (BIM) services - a three dimensional illustration of the entire building lifecycle of the building asset.',
        details:[],
        table:[],
        projects:{
                video:'https://www.thb.gov.hk/tc/blog/20210329%20%E9%AC%A7%E5%B8%82%E4%B8%AD%E5%B7%A5%E7%A8%8B%E7%9A%84%E6%8C%91%E6%88%B0.mp4',
                header:'「汽車捐山窿」 — 謎團 • 蛻變',
                des:'為提升工程效率和施工安全及準繩度，路政署採用建築信息模擬（Building Information Modelling (BIM)）技術，在電腦虛擬環境中模擬整個拆卸流程，提早了解和熟習過程中可能面對的挑戰。',
                link:'https://www.thb.gov.hk/eng/blog/index_id_46.htm',
                poster:Poster
            },
        
    },
    KMS:{
        bg:KMS,
        mobile:"none",
        desktop:true,
        type:'',
        icon:KMSIcon,
        name:'Knowledge Management System',
        image:KMS1,
        overview:'A centralised knowledge sharing platform for all construction project  know-hows.  Authorized construction professionals can update project information where management teams can review and track all construction records and progress, even from long finished projects at ease. ',
        details:[],
        tableHeader: ['Function','Management','MIC','PIC','Admin'],
        table:[['View Information',true,true,true,false],['Upload Information',false,false,true,false]
        ,['Edit Information',false,false,true,false],['Approve Information',false,true,false,false],['Assign Task',false,true,false,false],['View Statistics',true,false,false,false],['Edit User',false,false,false,true]],
        projects:'',
    },
    Analyse:{
        bg:Analyse,
        mobile:true,
        desktop:true,
        icon:AnalyseIcon,
        type:'',
        name:'Cerebro Analyse',
        image:Analyse1,
        overview:'A software to streamline construction budgeting and estimations. With a few clicks, monthly and overall costs of sub-contractors and projects will be automatically calculated and ready for review, saving those tedious cost calculations from now on.',
        details:[],
        table:[],
        projects:'',
        
    },
    Procurement:{
        bg:Procurement,
        mobile:true,
        desktop:true,
        icon:ProcurementIcon,
        type:'',
        name:'Cerebro Procurement',
        image:Procurement1,
        overview:'An integrated platform to automate vendor and material sourcing, digitally. From identifying material costs, screening of best vendors, receipt of quotations and material purchase, every internal and external material movements will always be under your control 24/7, just on one tap away. ',
        details:[],
        table:[],
        projects:'',
    },
    PhotoReg:{
        bg:PhotoReg,
        mobile:true,
        desktop:"none",
        icon:PhotoRegIcon,
        type:'Cerebro Project',
        name:'Photo Registration',
        image:PhotoReg1,
        overview:'Utilizing the cloud technology, all site photos can now be uploaded, stored and categorized through the cloud-based platform with access from anytime and anywhere. Photos stored are retrievable in our Cerebro platforms. ',
        details:[],
        table:[],
        projects:'',
    },
    Signature:{
        bg:Signature,
        mobile:true,
        desktop:true,
        icon:SignatureIcon,
        type:'',
        name:'Signature App',
        image:Signature1,
        overview:'Make an electronic signature to Cerebro platforms, anytime and anywhere.',
        details:[],
        table:[],
        projects:'',
    }
}


// export const productName = ['Cerebro Inspection','Cerebro Diary','EDMS','BIM','KMS','Cerebro Analyse','Cerebro Procurement','Photo Registration','Signature']
// export const productRoute = ['Inspection','Diary','EDMS','BIM','KMS','Analyse','Procurement','PhotoReg','Signature']
export default productJson;
