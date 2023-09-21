import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <section className='w-full h-full my-[100px] space-y-16'>
        <div className='text-center max-w-[400px] mx-auto space-y-2'>
            <h1 className='text-4xl font-bold'>Timeline</h1>
            <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>    
        </div>

        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#150E28', color: '#fff' }}
                date="November 18, 2023"
                dateClassName='text-purple text-3xl'
                iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'1'}
                iconClassName='flex justify-center items-center text-2xl'
            >
                <h3 className="vertical-timeline-element-title text-purple text-xl text-right">Hackathon Announcement</h3>
                <p className='text-right text-sm'>
                The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="November 18, 2023"
                dateClassName='text-purple text-3xl'
                contentStyle={{ background: '#150E28', color: '#fff' }}
                iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'2'}
                iconClassName='flex justify-center items-center text-2xl'
            >
            <h3 className="vertical-timeline-element-title text-purple text-xl">Teams Registration Begins</h3>
                <p className='text-sm'>
                Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="November 18, 2023"
                dateClassName='text-purple text-3xl'
                contentStyle={{ background: '#150E28', color: '#fff' }}
                iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'3'}
                iconClassName='flex justify-center items-center text-2xl'
            >
                <h3 className="vertical-timeline-element-title text-purple text-xl text-right">Teams Registration Ends</h3>
                <p className='text-sm text-right'>Interested Participants are no longer Allowed to register</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={'1'}
            >
                <h3 className="vertical-timeline-element-title text-purple text-xl">Teams Registration Ends</h3>
                <p>Interested Participants are no longer Allowed to register</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={'2'}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={'3'}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                Creative Direction, User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={'4'}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={'5'}
            />
        </VerticalTimeline>
    </section>
  )
}

export default Timeline;

// <section className="w-full h-full my-28">
//         <div>
//             <div className="max-w-[490px] text-right border-r border-purple space-x-4">
//                 <h1 className="text-purple "></h1>
//                 <p className="text-white"></p>
//             </div>
//         </div>
//     </section>




