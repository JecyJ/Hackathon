import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Timeline = () => {
  return (
    <section className='w-full h-full my-[100px] space-y-16'>
        <div className='text-center max-w-[400px] mx-auto space-y-2'>
            <h1 className='text-4xl font-bold'>Timeline</h1>
            <p>Here is the breakdown of the time we anticipate using for the upcoming event.</p>    
        </div>

        <VerticalTimeline lineColor='#903AFF'>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#150E28', color: '#fff' }}
                contentArrowStyle={{ borderRight: 'none' }}
                date="November 18, 2023"
                dateClassName='text-purple text-3xl'
                // iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'1'}
                iconClassName='flex justify-center items-center text-2xl text-white bg-gradient-to-r from-primarytwo to-primaryone border-purple'
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
                contentArrowStyle={{ borderRight: 'none' }}
                // iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'2'}
                iconClassName='flex justify-center items-center text-2xl text-white bg-gradient-to-r from-primarytwo to-primaryone'
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
                contentArrowStyle={{ borderRight: 'none' }}
                // iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'3'}
                iconClassName='flex justify-center items-center text-2xl text-white bg-gradient-to-r from-primarytwo to-primaryone'
            >
                <h3 className="vertical-timeline-element-title text-purple text-xl text-right">Announcement of the accepted Teams and Ideas</h3>
                <p className='text-sm text-right'>All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="November 18, 2023"
                dateClassName='text-purple text-3xl'
                contentStyle={{ background: '#150E28', color: '#fff' }}
                contentArrowStyle={{ borderRight: 'none' }}
                // iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'4'}
                iconClassName='flex justify-center items-center text-2xl text-white bg-gradient-to-r from-primarytwo to-primaryone'
            >
                <h3 className="vertical-timeline-element-title text-purple text-xl">Teams Registration Ends</h3>
                <p className='text-sm text-right'>Interested Participants are no longer Allowed to register</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 18, 2023"
                dateClassName='text-purple text-3xl'
                contentStyle={{ background: '#150E28', color: '#fff' }}
                contentArrowStyle={{ borderRight: 'none' }}
                // iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'5'}
                iconClassName='flex justify-center items-center text-2xl text-white bg-gradient-to-r from-primarytwo to-primaryone'
            >
                <h3 className="vertical-timeline-element-title text-purple text-xl">Getlinked Hackathon 1.0 Offically Begins</h3>
                <p className='text-sm text-right'>Accepted teams can now proceed to build their ground breaking skill driven solutions</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 18, 2023"
                dateClassName='text-purple text-3xl'
                contentStyle={{ background: '#150E28', color: '#fff' }}
                contentArrowStyle={{ borderRight: 'none' }}
                // iconStyle={{ background: '#903AFF', color: '#fff' }}
                icon={'6'}
                iconClassName='flex justify-center items-center text-2xl text-white bg-gradient-to-r from-primarytwo to-primaryone'
            >
                <h3 className="vertical-timeline-element-title text-purple text-xl">Demo Day</h3>
                <p className='text-sm text-right'>Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </section>
  )
}

export default Timeline;




