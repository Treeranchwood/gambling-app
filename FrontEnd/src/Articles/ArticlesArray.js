/**
 * @description the data for a certain artticle
 * @property {string} id unique id, has to be the same one as the articles
 * @property {string} title - The title of the article
 * @property {string} body - Brief description or summary of the article
 * @property {string} imgSrc - Path to the article's featured image
 * @property {string} content - Full article content for detailed view
 */

/**
 * Array containing the article content for the articles array
 * @type {Article[]}
 */
// articleArray is an array with all the article, their id's and their titles. Simply enter an article, with the correnct id, title and an
// an image, which can be uploaded into the public folder
// The content is the body text of the articles. I have coded it in a way where it has to be coded in jsx html because this allows for future composability on top
// with say another portal
export const articleArray = [
    {
        id: "1",
        title: "Why Gambling is Haram", 
        body: "Understanding the Islamic perspective on gambling and its harmful effects on individuals and society.", 
        imgSrc: "download.webp",
        content: `
            <h2>Why Gambling is Haram in Islam</h2>
            
            <p>Gambling is explicitly forbidden in Islam and is considered haram (forbidden) for several important reasons. The Quran and Hadith provide clear guidance on this matter.</p>
            
            <h3>Quranic Evidence</h3>
            <p>Allah says in the Quran (Surah Al-Ma'idah 5:90-91):</p>
            <blockquote>
                "O you who have believed, indeed, intoxicants, gambling, [sacrificing on] stone alters [to other than Allah], and divining arrows are but defilement from the work of Satan, so avoid it that you may be successful. Satan only wants to cause between you animosity and hatred through intoxicants and gambling and to avert you from the remembrance of Allah and from prayer. So will you not desist?"
            </blockquote>
            
            <h3>Why is Gambling Haram?</h3>
            <ul>
                <li><strong>Destroys wealth:</strong> Gambling leads to financial loss and can destroy families</li>
                <li><strong>Creates addiction:</strong> It becomes an obsession that takes over one's life</li>
                <li><strong>Promotes greed:</strong> It encourages the desire for easy money</li>
                <li><strong>Harms relationships:</strong> It can destroy trust and cause family problems</li>
                <li><strong>Wastes time:</strong> Time spent gambling could be used for productive activities</li>
            </ul>
            
            <h3>Islamic Alternative</h3>
            <p>Instead of gambling, Islam encourages:</p>
            <ul>
                <li>Hard work and honest earning</li>
                <li>Charity and helping others</li>
                <li>Investing in halal businesses</li>
                <li>Spending time with family</li>
                <li>Spiritual development</li>
            </ul>
            
            <p>Remember, Allah has forbidden gambling for our own benefit. By avoiding it, we protect ourselves from financial, emotional, and spiritual harm.</p>
        `
    },
    {
        id: "2",
        title: "The Psychology of Gambling Addiction", 
        body: "How gambling affects the brain and leads to compulsive behavior patterns that are difficult to break.", 
        imgSrc: "download.webp",
        content: `
            <h2>The Psychology of Gambling Addiction</h2>
            
            <p>Gambling addiction is a serious psychological condition that affects millions of people worldwide. Understanding the psychology behind it can help in recovery.</p>
            
            <h3>How Gambling Affects the Brain</h3>
            <p>When you gamble, your brain releases dopamine, a neurotransmitter associated with pleasure and reward. This creates a powerful reinforcement loop:</p>
            <ul>
                <li><strong>Dopamine rush:</strong> Winning triggers a surge of dopamine</li>
                <li><strong>Memory formation:</strong> The brain remembers this pleasurable experience</li>
                <li><strong>Craving:</strong> The brain seeks to repeat the experience</li>
                <li><strong>Tolerance:</strong> Over time, more gambling is needed for the same "high"</li>
            </ul>
            
            <h3>Psychological Factors</h3>
            <p>Several psychological factors contribute to gambling addiction:</p>
            <ul>
                <li><strong>Escapism:</strong> Gambling provides temporary relief from stress or problems</li>
                <li><strong>Illusion of control:</strong> Believing you can influence random outcomes</li>
                <li><strong>Chasing losses:</strong> Trying to win back money that's been lost</li>
                <li><strong>Social pressure:</strong> Peer influence or family history of gambling</li>
            </ul>
            
            <h3>Breaking the Cycle</h3>
            <p>Recovery from gambling addiction requires:</p>
            <ul>
                <li>Recognizing the problem</li>
                <li>Seeking professional help</li>
                <li>Building healthy coping mechanisms</li>
                <li>Creating a support network</li>
                <li>Finding alternative activities</li>
            </ul>
            
            <p>Understanding the psychology of gambling addiction is the first step toward recovery. With proper support and treatment, it's possible to break free from this destructive cycle.</p>
        `
    },
    {
        id: "3",
        title: "Financial Consequences of Gambling", 
        body: "Real stories and statistics showing how gambling can destroy personal finances and family stability.", 
        imgSrc: "download.webp",
        content: `
            <h2>Financial Consequences of Gambling</h2>
            
            <p>The financial impact of gambling can be devastating, affecting not just the individual but entire families and communities.</p>
            
            <h3>Personal Financial Impact</h3>
            <p>Gambling can lead to severe financial problems:</p>
            <ul>
                <li><strong>Debt accumulation:</strong> Borrowing money to continue gambling</li>
                <li><strong>Bankruptcy:</strong> Complete financial ruin</li>
                <li><strong>Loss of assets:</strong> Selling possessions to fund gambling</li>
                <li><strong>Poor credit:</strong> Damaged credit scores from unpaid debts</li>
                <li><strong>Legal problems:</strong> Financial crimes to fund gambling</li>
            </ul>
            
            <h3>Family Impact</h3>
            <p>The financial consequences extend to families:</p>
            <ul>
                <li><strong>Reduced household income:</strong> Money lost to gambling</li>
                <li><strong>Child neglect:</strong> Basic needs not met due to financial strain</li>
                <li><strong>Relationship breakdown:</strong> Trust issues and arguments about money</li>
                <li><strong>Inheritance loss:</strong> Family wealth destroyed</li>
            </ul>
            
            <h3>Statistics</h3>
            <p>Research shows alarming statistics:</p>
            <ul>
                <li>Problem gamblers are 15 times more likely to declare bankruptcy</li>
                <li>Up to 50% of problem gamblers commit crimes to fund their addiction</li>
                <li>Families of problem gamblers are more likely to experience domestic violence</li>
                <li>Children of problem gamblers are more likely to develop gambling problems themselves</li>
            </ul>
            
            <h3>Recovery and Prevention</h3>
            <p>Financial recovery requires:</p>
            <ul>
                <li>Complete cessation of gambling</li>
                <li>Professional financial counseling</li>
                <li>Debt management strategies</li>
                <li>Budget planning and financial education</li>
                <li>Building emergency savings</li>
            </ul>
            
            <p>The financial consequences of gambling are real and severe. Early intervention and proper financial management are crucial for recovery.</p>
        `
    },
    {
        id: "4",
        title: "Breaking Free from Gambling", 
        body: "Practical steps and resources to help overcome gambling addiction and rebuild a healthy life.", 
        imgSrc: "download.webp",
        content: `
            <h2>Breaking Free from Gambling</h2>
            
            <p>Recovery from gambling addiction is possible with the right approach and support. Here's a comprehensive guide to breaking free.</p>
            
            <h3>Step 1: Acknowledge the Problem</h3>
            <p>The first step is recognizing that you have a gambling problem:</p>
            <ul>
                <li>Be honest with yourself about your gambling behavior</li>
                <li>Accept that you need help</li>
                <li>Understand that recovery is a process</li>
                <li>Commit to making positive changes</li>
            </ul>
            
            <h3>Step 2: Seek Professional Help</h3>
            <p>Professional support is crucial for recovery:</p>
            <ul>
                <li><strong>Counseling:</strong> Individual or group therapy</li>
                <li><strong>Support groups:</strong> Gamblers Anonymous or similar programs</li>
                <li><strong>Medical evaluation:</strong> Check for co-occurring mental health issues</li>
                <li><strong>Financial counseling:</strong> Help with debt management</li>
            </ul>
            
            <h3>Step 3: Create a Support Network</h3>
            <p>Build a strong support system:</p>
            <ul>
                <li>Tell trusted family and friends about your recovery</li>
                <li>Join recovery communities</li>
                <li>Find a sponsor or mentor</li>
                <li>Connect with others in recovery</li>
            </ul>
            
            <h3>Step 4: Develop Healthy Alternatives</h3>
            <p>Replace gambling with positive activities:</p>
            <ul>
                <li>Exercise and physical activities</li>
                <li>Hobbies and creative pursuits</li>
                <li>Volunteer work</li>
                <li>Spending time with family</li>
                <li>Learning new skills</li>
            </ul>
            
            <h3>Step 5: Financial Recovery</h3>
            <p>Rebuild your financial health:</p>
            <ul>
                <li>Create a realistic budget</li>
                <li>Pay off debts systematically</li>
                <li>Build emergency savings</li>
                <li>Learn about financial management</li>
                <li>Avoid high-risk financial decisions</li>
            </ul>
            
            <h3>Step 6: Maintain Recovery</h3>
            <p>Stay committed to your recovery:</p>
            <ul>
                <li>Attend regular support meetings</li>
                <li>Practice self-care and stress management</li>
                <li>Monitor your thoughts and feelings</li>
                <li>Celebrate your progress</li>
                <li>Help others in recovery</li>
            </ul>
            
            <p>Breaking free from gambling is challenging but achievable. With determination, support, and the right resources, you can rebuild your life and create a brighter future.</p>
        `
    }
]