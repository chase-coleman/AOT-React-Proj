import Card  from "../components/Card"


const AboutPage = () => {
    return (
        
        <div className="grid grid-cols-3 gap-4 w-full h-9/10 mx-auto p-4">
            <div className='border-2 border-black p-4 h-9/10 min-h-1/10'>
                <Card imgSrc='../images/Hajime.jpg' title="Hajime Isayama"
                firstItem="He was born on August 29th, 1986 in Oita Prefecture, Japan."
                secondItem="He has won 20 awards throughout his career."
                thirdItem="favorite TV Show: Game of Thrones."
                fourthItem="Favorite AOT character: Jean."
                fifthItem="Favorite Chapter: 71"
                />
            </div>
            <div className='border-2 border-black p-4 h-9/10 min-h-1/10'>
            <Card imgSrc='../images/Attack-on-Titan-Logo.png' title="Info & Awards"
                firstItem="Core Themes: Freedom vs Oppression, Cycles of Violence, Power and Corruption, 
                Morality, War, Hatred, Prejudice."
                thirdItem="S3 E17, 'Hero' is rated #4 Best TV Episode of all-time by IMDB."
                secondItem="The manga has 139 chapters. "
                fourthItem="The show had 4 seasons with 98 total episodes. It has 47 episodes with
                an IMDB rating of 9.0 or higher."
                fifthItem="Attack on Titan won 40 awards, including the 2024 Astra TV Award.
                It was the first anime to ever win it."
                />
            </div>
            <div className='border-2 border-black p-4 h-9/10 min-h-1/10'>
            <Card imgSrc='../images/Hajime.jpg' title="Top 5 Rated Episodes"
                firstItem="Hero (S3 E17) - 9.8/10"
                secondItem="Perfect Game (S3E16) - 9.8/10 "
                thirdItem="The War Hammer Titan (S4 E6) - 9.8/10 "
                fourthItem="Declaration of War (S4 E5) - 9.8/10 "
                fifthItem="From You, 2000 Years Ago (S4 E21) - 9.8/10"
                />
            </div>
        </div>
    )
}
export default AboutPage