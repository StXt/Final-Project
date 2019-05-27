// Перша відповідь правильна всередині масиву

let english = [
    {
        question: 'Martin is a very _____ boy. Everybody likes him.',
        answers: [
            'polite',
            'rude',
            'lazy',
            'selfish'
        ]
    },
    {
        question: 'Albert is really _____. He always makes me laugh.',
        answers: [
            'funny',
            'honest',
            'supportive',
            'sincere'
        ]
    },
    {
        question: 'Adam is very _____. He enjoys sharing with people.',
        answers: [
            'generous',
            'noisy',
            'stingy',
            'shy'
        ]
    },
    {
        question: 'You can trust secrets to Jane. She is a _____ person.',
        answers: [
            'reliable',
            'helpful',
            'friendly',
            'sensitive'
        ]
    },
    {
        question: 'There is nothing to do. I\'m really _____.',
        answers: [
            'bored',
            'sensitive',
            'polite',
            'hardworking'
        ]
    },
    {
        question: 'Julia was very _____ to see her husband on TV.',
        answers: [
            'surprised',
            'noisy',
            'quiet',
            'bored'
        ]
    },
    {
        question: 'Maria is only 5 but she can read and write. She is really_____.',
        answers: [
            'clever',
            'interested',
            'angry',
            'sad'
        ]
    },
    {
        question: 'I had a/an _____dream last night. It was a real nightmare.',
        answers: [
            'bad',
            'interesting',
            'sweet',
            'good'
        ]
    },
    {
        question: 'Martin is a/an _____ person. He has no money.',
        answers: [
            'poor',
            'exciting',
            'shocking',
            'rich'
        ]
    },
    {
        question: 'My brother was ill last week but now he is getting _____.',
        answers: [
            'better',
            'gooder',
            'smarter',
            'more'
        ]
    },
    {
        question: 'I\'m going to Barcelona next week. I\'m so _____.',
        answers: [
            'excited',
            'careful',
            'lazy',
            'shocked'
        ]
    },
    {
        question: 'It was a/an _____ film. I cried in the end.',
        answers: [
            'sad',
            'sensible',
            'bored',
            'funny'
        ]
    },
    {
        question: 'Jill is _____ to go to school today. She is in a bad mood.',
        answers: [
            'unwilling',
            'excited',
            'untidy',
            'cheerful'
        ]
    },
    {
        question: 'John is a/an _____ person. He always breaks things around.',
        answers: [
            'clumsy',
            'careful',
            'reliable',
            'flexible'
        ]
    },
    {
        question: 'You must be really _____ if you want to finish this boring project.',
        answers: [
            'patient',
            'interesting',
            'unwilling',
            'friendly'
        ]
    },
    {
        question: 'You need to be really _____ to play chess.',
        answers: [
            'focused',
            'funny',
            'rich',
            'unusual'
        ]
    },
    {
        question: 'It\'s _____ to have a foreign passport to travel abroad.',
        answers: [
            'necessary',
            'healthy',
            'pleasant',
            'needing'
        ]
    },
    {
        question: 'Clara is never late for appointments. She is a/an _____ person.',
        answers: [
            'punctual',
            'honest',
            'clever',
            'independent'
        ]
    },
    {
        question: 'Martha enjoys meeting her friends. She is a very _____ person.',
        answers: [
            'communicative',
            'organized',
            'reserved',
            'independent'
        ]
    },
    {
        question: 'He always tells the truth. He is a/an _____ person.',
        answers: [
            'honest',
            'focused',
            'punctual',
            'interesting'
        ]
    },
    {
        question: 'My daughter believes absolutely everything you tell her. She’s a/an _____ girl.',
        answers: [
            'gullible',
            'intellectual',
            'illiterate',
            'tolerant'
        ]
    },
    {
        question: 'Aunt Mary believes horoscopes, carries lucky charms with her and hates black cats. She’s so _____.',
        answers: [
            'superstitious',
            'intellectual',
            'intimidating',
            'cynical'
        ]
    },
    {
        question: 'He’s a/an _____ actor able to play any kind of roles – from comic to dramatic.',
        answers: [
            'versatile',
            'sensitive',
            'illiterate',
            'organized'
        ]
    },
    {
        question: 'Dennis is rather shy and unconfident. He always feels _____ to his peers.',
        answers: [
            'inferior',
            'junior',
            'bold',
            'exhausted'
        ]
    },
    {
        question: 'She was so _____ in the book she was reading that she didn’t notice me come into the room.',
        answers: [
            'engrossed',
            'mesmerized',
            'impressed',
            'fascinating'
        ]
    },
    {
        question: 'The synonym for wonderful is _____.',
        answers: [
            'fantastic',
            'awful',
            'fantasy',
            'writer'
        ]
    },
    {
        question: 'You will need a _____ to open a bottle of wine',
        answers: [
            'corkscrew',
            'screwcork',
            'corker',
            'crew'
        ]
    },
    {
        question: 'The opposite of good-looking is _____.',
        answers: [
            'ugly',
            'handsome',
            'attractive',
            'crappy'
        ]
    },
    {
        question: 'You will use a _____ to keep warm at sleep.',
        answers: [
            'blanket',
            'pillow',
            'socks',
            'pants'
        ]
    },
    {
        question: 'Susie is my ex-wife. We _____ 2 years ago.',
        answers: [
            'divorced',
            'married',
            'engaged',
            'broke'
        ]
    },
    {
        question: 'A person who takes interviews for a newspaper is a _____.',
        answers: [
            'reporter',
            'journalism',
            'writer',
            'artist'
        ]
    },
    {
        question: 'You need to _____ some water to make tea.',
        answers: [
            'boil',
            'drink',
            'cook',
            'drain'
        ]
    },
    {
        question: 'If I want to put a picture on the wall I will need a _____ and a nail.',
        answers: [
            'hammer',
            'buttery',
            'brush',
            'pliers'
        ]
    },
    {
        question: 'We need to _____ it with all our colleagues before we decide.',
        answers: [
            'discuss',
            'tell',
            'talk',
            'speak'
        ]
    },
    {
        question: 'I don\'t have a bank card so I always pay in _____.',
        answers: [
            'cash',
            'money',
            'coins',
            'currency'
        ]
    },
    {
        question: 'I have a car but I don\'t have a driving _____.',
        answers: [
            'license',
            'certificate',
            'document',
            'order'
        ]
    },
    {
        question: 'When you pay for something in a store you normally get a _____.',
        answers: [
            'receipt',
            'bill',
            'recipe',
            'check'
        ]
    },
    {
        question: 'I saw a very good _____ advertisement in a paper last week.',
        answers: [
            'job',
            'work',
            'occupation',
            'enterprisement'
        ]
    },
    {
        question: 'I hate doing the _____, especially washing the windows.',
        answers: [
            'housework',
            'homework',
            'jobs',
            'gig'
        ]
    },
    {
        question: 'She is a bit _____. She always tells you how to do everything.',
        answers: [
            'bossy',
            'friendly',
            'lazy',
            'crazy'
        ]
    }
]
    
    export { english };