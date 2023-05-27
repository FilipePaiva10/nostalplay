tailwind.config = {
    theme: {
        extend: {
            colors: {
                primary: '#0244EF',
                gcta: 'linear-gradient(180deg, #b9f27d 0, #a4ec79 16.67%, #8be373 33.33%, #6cd86c 50%, #47cd66 66.67%, #00c464 83.33%, #00bd65 100%)',
                primaryContrast: '#13357A',
                secondy: '#0FA1D9',
                p: '#737373',
                w: '#FFC107',
                wlow: '#FDBC2DA3',
                gr: '#F3F3F3',
                bl: '#42C4F9',
                mtdr: '#E84D3E',
                mtdg: '#2EAF63',
                mtdw: '#F1C51C',
                mtdv: '#7171AD'
            },
            boxShadow: {
                etp: '0px 4px 0px #334071',
                etpl: '-3px 2px 0px #334071',
                ctnl: '-5px 14px 0px #000000',
                mtd: '0px 4px 24px rgba(0, 0, 0, 0.05)',
                qm: '0px 4px 42px rgba(0, 0, 0, 0.1)',
                ntc: '0px 4px 0px #334071',
                cta: '0px 4px 4px rgba(0, 0, 0, 0.25)'
            },
            fontFamily: {
                sg: 'Space Grotesk',
                pp: 'Poppins',
                mt: 'Montserrat'
            },
            background: {
                bd: 'linear-gradient(176.86deg, #FFFFFF 0%, #FFFFFF 97.4%)',
                ctas: 'radial-gradient(circle at -19.64% 37.72%, #92a8ff 0, #3c78f2 50%, #004dcc 100%)'
            },
            border: {
                btni: '1px solid #E6E6E6',
                bcta: '1px solid #45A64F'
            },
            borderRadius: {
                in: '4px 0px 0px 4px',
                btni: '0px 5px 5px 0px'
            },
            backgroundImage: {
                mtv: 'https://robociencia.com.br/wp-content/uploads/2023/04/BgMotivos.webp',
                df: 'https://robociencia.com.br/wp-content/uploads/2023/04/diferenciais.png',
                ctn: 'https://robociencia.com.br/wp-content/uploads/2023/05/2.png',
                ctnl: 'url(https://robociencia.com.br/wp-content/uploads/2023/05/ctnl.png)',
                retro: 'url(assets/img/games/retro.jpg)',
                house: 'url(assets/img/games/hose.jpg)',
                pacman: 'url(assets/img/games/pacman.jpg)',
            },
            transform: {
                ctn: 'translate(-50%, -50%);'
            },
            transformOrigin: {
                ctn: 'translate(-50%, -50%);'
            }
        }
    }
}