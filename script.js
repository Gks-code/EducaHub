// Dados dos cursos com categorias corrigidas
const courses = [
    {
        "id": 1,
        "title": "Html e Css",
        "category": "Front-end",
        "lessons": 263,
        "duration": 64,
        "image": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
        "link": "https://t.me/c/2606208161/1796"
    },
    {
        "id": 2,
        "title": "Java Script",
        "category": "JavaScript",
        "lessons": 297,
        "duration": 49,
        "image": "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "link": "https://t.me/c/2606208161/2746"
    },
    {
        "id": 3,
        "title": "Full Stack Java Script",
        "category": "JavaScript",
        "lessons": 31,
        "duration": 24,
        "image": "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
        "link": "https://t.me/c/2606208161/14389"
    },
    {
        "id": 4,
        "title": "Formação-Full Stack Javascript",
        "category": "JavaScript",
        "lessons": 661,
        "duration": 165,
        "image": "https://img.shields.io/badge/Full%20Stack-JavaScript-yellow",
        "link": "https://t.me/c/2606208161/20215"
    },
    {
        "id": 5,
        "title": "React Native na Prática: Apps para iOS e Android 2023",
        "category": "Mobile",
        "lessons": 207,
        "duration": 41,
        "image": "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
        "link": "https://t.me/c/2606208161/17899"
    },
    {
        "id": 6,
        "title": "Pythin FIAP",
        "category": "Python",
        "lessons": 47,
        "duration": 5,
        "image": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        "link": "https://t.me/c/2606208161/17338"
    },
    {
        "id": 7,
        "title": "Python 3 do Básico ao Avançado꞉ com projetos reais",
        "category": "Python",
        "lessons": 721,
        "duration": 144,
        "image": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
        "link": "https://t.me/c/2606208161/20883"
    },
    {
        "id": 8,
        "title": "Profissão - Desenvolvedor Full Stack",
        "category": "Full Stack",
        "lessons": 357,
        "duration": 89,
        "image": "https://img.shields.io/badge/Full%20Stack-Developer-blue",
        "link": "https://t.me/c/2606208161/21609"
    },
    {
        "id": 9,
        "title": "Criando Robôs com Python: Automatizado",
        "category": "Python",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Python-Robotics-3776AB",
        "link": "https://t.me/c/2606208161/21970"
    },
    {
        "id": 10,
        "title": "Python para Análise de Dados",
        "category": "Data Science",
        "lessons": 20,
        "duration": 3,
        "image": "https://img.shields.io/badge/Python-Data%20Analysis-3776AB",
        "link": "https://t.me/c/2606208161/21994"
    },
    {
        "id": 11,
        "title": "Python Para Data Science e Machine Learning",
        "category": "Data Science",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Python-ML%2FDS-3776AB",
        "link": "https://t.me/c/2606208161/22009"
    },
    {
        "id": 12,
        "title": "Dashboards com Python",
        "category": "Data Science",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Python-Dashboards-3776AB",
        "link": "https://t.me/c/2606208161/22080"
    },
    {
        "id": 13,
        "title": "Django Master",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
        "link": "https://t.me/c/2606208161/22156"
    },
    {
        "id": 14,
        "title": "Formação Python Para Finanças",
        "category": "Data Science",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Python-Finance-3776AB",
        "link": "https://t.me/c/2606208161/22302"
    },
    {
        "id": 15,
        "title": "C++ Básico ao Avançado",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        "link": "https://t.me/c/2606208161/22529"
    },
    {
        "id": 16,
        "title": "Aprendendo a Criar Games com C++ e a Unreal Engine 4",
        "category": "Games",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Unreal%20Engine-0E1128?style=for-the-badge&logo=unrealengine&logoColor=white",
        "link": "https://t.me/c/2606208161/22561"
    },
    {
        "id": 17,
        "title": "C# Experts - Dometrai",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
        "link": "https://t.me/c/2606208161/22589"
    },
    {
        "id": 18,
        "title": "Curso de NestJS do Zero ao avançado",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
        "link": "https://t.me/c/2606208161/18350"
    },
    {
        "id": 19,
        "title": "Full Stack PHP Developer",
        "category": "Full Stack",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
        "link": "https://t.me/c/2606208161/27510"
    },
    {
        "id": 20,
        "title": "PHP - Programando com Orientação a Objetos",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/PHP-OOP-777BB4",
        "link": "https://t.me/c/2606208161/27735"
    },
    {
        "id": 21,
        "title": "Formação PHP Completa",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/PHP-Complete-777BB4",
        "link": "https://t.me/c/2606208161/27891"
    },
    {
        "id": 22,
        "title": "Golang Intensivo - Full Cycle",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
        "link": "https://t.me/c/2606208161/17704"
    },
    {
        "id": 23,
        "title": "Go Expert",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Go-Expert-00ADD8",
        "link": "https://t.me/c/2606208161/18408"
    },
    {
        "id": 24,
        "title": "TypeScript do básico ao avançado",
        "category": "Front-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
        "link": "https://t.me/c/2606208161/26458"
    },
    {
        "id": 25,
        "title": "Curso de Angular 2 (v17+) Typescript do Básico ao Avançado",
        "category": "Front-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
        "link": "https://t.me/c/2606208161/26898"
    },
    {
        "id": 26,
        "title": "SQL para Análise de Dados",
        "category": "Data Science",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/SQL-Data%20Analysis-4479A1",
        "link": "https://t.me/c/2606208161/25750"
    },
    {
        "id": 27,
        "title": "SQL do Básico ao Avançado",
        "category": "Database",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/SQL-Database-4479A1",
        "link": "https://t.me/c/2606208161/25808"
    },
    {
        "id": 28,
        "title": "SQL Para Análise de Dados",
        "category": "Data Science",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/SQL-Analytics-4479A1",
        "link": "https://t.me/c/2606208161/25835"
    },
    {
        "id": 29,
        "title": "aplicativos web e mobile sem programação",
        "category": "No Code",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/No%20Code-Apps-green",
        "link": "https://t.me/c/2606208161/5473"
    },
    {
        "id": 30,
        "title": "Desenvolvimento Web",
        "category": "Full Stack",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Web%20Development-Full%20Stack-blue",
        "link": "https://t.me/c/2606208161/7245"
    },
    {
        "id": 31,
        "title": "Imersão DotNet Expert",
        "category": "Back-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white",
        "link": "https://t.me/c/2606208161/18748"
    },
    {
        "id": 32,
        "title": "Domine a criação de imagens com Inteligência Artificial",
        "category": "IA",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/AI-Images-FF6B6B",
        "link": "https://t.me/c/2606208161/17283"
    },
    {
        "id": 33,
        "title": "back end full stack",
        "category": "Full Stack",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Backend-Full%20Stack-6C63FF",
        "link": "https://t.me/c/2606208161/6705"
    },
    {
        "id": 34,
        "title": "front end da webmaster",
        "category": "Front-end",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Frontend-Webmaster-4FC08D",
        "link": "https://t.me/c/2606208161/7327"
    },
    {
        "id": 35,
        "title": "Imersão Full Stack - Full Cycle ",
        "category": "Full Stack",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Full%20Stack-Immersão-6C63FF",
        "link": "https://t.me/c/2606208161/18727"
    },
    {
        "id": 36,
        "title": "Unity do zero ao profissonal",
        "category": "Games",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
        "link": "https://t.me/c/2606208161/7419"
    },
    {
        "id": 37,
        "title": "Análise Forense de Malware-Clavis",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Malware-Forensics-red",
        "link": "https://t.me/c/2606208161/4829"
    },
    {
        "id": 38,
        "title": "Analise Forense de Sistemas-Clavis",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/System-Forensics-red",
        "link": "https://t.me/c/2606208161/4802"
    },
    {
        "id": 39,
        "title": "Machine Learning com PyCaret",
        "category": "Data Science",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Machine%20Learning-PyCaret-3776AB",
        "link": "https://t.me/c/2606208161/16786"
    },
    {
        "id": 40,
        "title": "Imersão Full Stack: Golang, Docker, Kafka, Nest.js, Next.js, K8s - Full Cycle ",
        "category": "Full Stack",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Full%20Stack-Cloud%20Native-6C63FF",
        "link": "https://t.me/c/2606208161/16804"
    },
    {
        "id": 41,
        "title": "Cypress eXpress",
        "category": "Testing",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Cypress-Testing-17202C",
        "link": "https://t.me/c/2606208161/18110"
    },
    {
        "id": 42,
        "title": "N8N Setup - automic",
        "category": "Automation",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/N8N-Automation-4C51BF",
        "link": "https://t.me/c/2606208161/33336"
    },
    {
        "id": 43,
        "title": "Automação Sem Limites",
        "category": "Automation",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Automation-No%20Limits-4C51BF",
        "link": "https://t.me/c/2606208161/33383"
    },
    {
        "id": 44,
        "title": "DevOps_Cloud",
        "category": "DevOps",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/DevOps-Cloud-007396",
        "link": "https://t.me/c/2606208161/18712"
    },
    {
        "id": 45,
        "title": "Reels Culinários – Escola Para Criadores ",
        "category": "Marketing",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Reels-Culinary-FF0000",
        "link": "https://t.me/c/2606208161/28504"
    },
    {
        "id": 46,
        "title": "Reels do Zero ao Avançado",
        "category": "Marketing",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Reels-Advanced-FF0000",
        "link": "https://t.me/c/2606208161/30285"
    },
    {
        "id": 48,
        "title": "mkt A Nova Moeda - Hyeser",
        "category": "Marketing",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Marketing-Digital-FF6B6B",
        "link": "https://t.me/c/2606208161/30509"
    },
    {
        "id": 49,
        "title": "Treinamento Além da Prospecção 2.0 ",
        "category": "Marketing",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Sales-Prospecting-4CAF50",
        "link": "https://t.me/c/2606208161/30709"
    },
    {
        "id": 50,
        "title": "Método Capcut Fácil",
        "category": "Design",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/CapCut-Video%20Editing-00C2FF",
        "link": "https://t.me/c/2606208161/31270"
    },
    {
        "id": 51,
        "title": "Hotmart: Curso de Tráfego ROI NO TALO",
        "category": "Marketing",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Traffic-ROI-FF6B35",
        "link": "https://t.me/c/2606208161/32038"
    },
    {
        "id": 52,
        "title": "Hotmart: Elxpro BR",
        "category": "E-commerce",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Elxpro-BR-blue?style=for-the-badge&logoColor=white",
        "link": "https://t.me/c/2606208161/17385"
    },
    {
        "id": 53,
        "title": "Formula Top Afiliado",
        "category": "Marketing",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Affiliate-Marketing-FFD700",
        "link": "https://t.me/c/2606208161/32321"
    },
    {
        "id": 54,
        "title": "Venda Sempre com IA - Black Rat",
        "category": "IA",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/AI-Sales-000000",
        "link": "https://t.me/c/2606208161/32717"
    },
    {
        "id": 55,
        "title": "Jornada Afiliado Pro (Completo)",
        "category": "Marketing",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Affiliate-Pro-FFD700",
        "link": "https://t.me/c/2606208161/32787"
    },
    {
        "id": 56,
        "title": "Print On Demand (Atualizado e Corrigido) ",
        "category": "E-commerce",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Print%20On%20Demand-Ecommerce-FF6B35",
        "link": "https://t.me/c/2606208161/33095"
    },
    {
        "id": 57,
        "title": "CF - (Hustle Minds) ",
        "category": "Business",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Course-Flip-Hustle",
        "link": "https://t.me/c/2606208161/33204"
    },
    {
        "id": 58,
        "title": "Espionagem Digital",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Digital-Espionage-black",
        "link": "https://t.me/c/2606208161/33239"
    },
    {
        "id": 59,
        "title": "IA Revolution Academy 2.0",
        "category": "IA",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/AI-Revolution-00C2FF",
        "link": "https://t.me/c/2606208161/33259"
    },
    {
        "id": 60,
        "title": "N8N Setup - Autotic",
        "category": "Automation",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/N8N-Automation-4C51BF",
        "link": "https://t.me/c/2606208161/33336"
    },
    {
        "id": 61,
        "title": "Automação Sem Limites",
        "category": "Automation",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Automation-Unlimited-4C51BF",
        "link": "https://t.me/c/2606208161/33383"
    },
    {
        "id": 62,
        "title": "Mentoria Marca Milionária  (Completo e Atualizado)",
        "category": "Business",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Brand-Millionaire-FFD700",
        "link": "https://t.me/c/2606208161/33528"
    },
    {
        "id": 63,
        "title": "cybersegurança hackone",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Cybersecurity-HackOne-red",
        "link": "https://t.me/c/2606208161/4036"
    },
    {
        "id": 64,
        "title": "hackeando com android",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Hacking-Android-3DDC84",
        "link": "https://t.me/c/2606208161/4150"
    },
    {
        "id": 65,
        "title": "pentest profissional desec",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Pentest-Professional-red",
        "link": "https://t.me/c/2606208161/4180"
    },
    {
        "id": 66,
        "title": "web hacking na pratica",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Web%20Hacking-Practical-red",
        "link": "https://t.me/c/2606208161/674"
    },
    {
        "id": 67,
        "title": "Web Hacking na Prática 2.0 - Crowsec Segurança Ofensiva",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Web%20Hacking-2.0-red",
        "link": "https://t.me/c/2606208161/15607"
    },
    {
        "id": 68,
        "title": "Pentest Professional Híbrido - CySource",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Pentest-Hybrid-red",
        "link": "https://t.me/c/2606208161/15655"
    },
    {
        "id": 69,
        "title": "Analista de Defesa Cibernética",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Cyber%20Defense-Analyst-blue",
        "link": "https://t.me/c/2606208161/16203"
    },
    {
        "id": 70,
        "title": "Analista de Ataque Cibernético",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Cyber%20Attack-Analyst-red",
        "link": "https://t.me/c/2606208161/16240"
    },
    {
        "id": 71,
        "title": "Formação em Cybersegurança - Hackersec",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Cybersecurity-Formation-red",
        "link": "https://t.me/c/2606208161/16262"
    },
    {
        "id": 72,
        "title": "Python para Pentest",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Python-Pentest-3776AB",
        "link": "https://t.me/c/2606208161/16304"
    },
    {
        "id": 73,
        "title": "Teste de Intrusão em Rede Wireless - Solyd",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Wireless-Pentest-red",
        "link": "https://t.me/c/2606208161/16321"
    },
    {
        "id": 74,
        "title": "WiFi Hacking Enterprise 2.0 DESEC Security",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/WiFi%20Hacking-Enterprise-red",
        "link": "https://t.me/c/2606208161/16384"
    },
    {
        "id": 75,
        "title": "Criptografia - 0x65-Desec",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Cryptography-Encryption-blue",
        "link": "https://t.me/c/2606208161/16333"
    },
    {
        "id": 76,
        "title": "Universidade Hacker",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Hacker-University-red",
        "link": "https://t.me/c/2606208161/16611"
    },
    {
        "id": 77,
        "title": "Pato Academy: Do Bug ao Bountry ",
        "category": "Cybersecurity",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Bug%20Bounty-Pato%20Academy-green",
        "link": "https://t.me/c/2606208161/16504"
    },
    {
        "id": 78,
        "title": "Cursos de Ingles",
        "category": "Languages",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/English-Course-blue",
        "link": "https://t.me/c/2606208161/28657"
    },
    {
        "id": 79,
        "title": "Cursos de Frances",
        "category": "Languages",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/French-Course-blue",
        "link": "https://t.me/c/2606208161/28663"
    },
    {
        "id": 80,
        "title": "Cursos de Alemao",
        "category": "Languages",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/German-Course-black",
        "link": "https://t.me/c/2606208161/28667"
    },
    {
        "id": 81,
        "title": "Cursos de Russo",
        "category": "Languages",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Russian-Course-red",
        "link": "https://t.me/c/2606208161/28659"
    },
    {
        "id": 82,
        "title": "Cursos de Coreano",
        "category": "Languages",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Korean-Course-blue",
        "link": "https://t.me/c/2606208161/28531"
    },
    {
        "id": 83,
        "title": "Cursos de Italino",
        "category": "Languages",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Italian-Course-green",
        "link": "https://t.me/c/2606208161/28665"
    },
    {
        "id": 84,
        "title": "Cursos de Mandarim",
        "category": "Languages",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/Mandarin-Course-red",
        "link": "https://t.me/c/2606208161/28661"
    },
    {
        "id": 85,
        "title": "Método FanArt 3.0",
        "category": "Design",
        "lessons": 28,
        "duration": 22,
        "image": "https://img.shields.io/badge/FanArt-Method-FF69B4",
        "link": "https://t.me/c/2606208161/28440"
    }
];
    // ... (mantenha o array de cursos exatamente como estava)

// Elementos DOM
const coursesGrid = document.getElementById('coursesGrid');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortFilter = document.getElementById('sortFilter');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileOverlay = document.getElementById('mobileOverlay');
const navbar = document.getElementById('navbar');
const searchResultsInfo = document.getElementById('searchResultsInfo');
const clearFiltersBtn = document.getElementById('clearFiltersBtn');

// Gerar categorias únicas para o filtro
function generateCategories() {
    const categories = [...new Set(courses.map(course => course.category))];
    categories.sort();
    
    // Limpar opções existentes
    categoryFilter.innerHTML = '<option value="">Todas as Categorias</option>';
    
    // Adicionar opções
    categories.forEach(category => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });
}

// Sistema de busca avançada
function advancedSearch(searchTerm) {
    searchTerm = searchTerm.toLowerCase().trim();
    
    if (!searchTerm) {
        return courses;
    }
    
    return courses.filter(course => {
        // Busca no título
        if (course.title.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Busca na categoria
        if (course.category.toLowerCase().includes(searchTerm)) {
            return true;
        }
        
        // Busca em palavras-chave
        const keywords = searchTerm.split(' ');
        for (let keyword of keywords) {
            if (keyword.length < 3) continue;
            
            if (course.title.toLowerCase().includes(keyword)) {
                return true;
            }
            
            if (course.category.toLowerCase().includes(keyword)) {
                return true;
            }
        }
        
        return false;
    });
}

// Atualizar contador de resultados
function updateResultsCount(count, hasSearch = false, hasCategory = false) {
    if (!searchResultsInfo) return;
    
    let message = '';
    
    if (count === 0) {
        message = 'Nenhum curso encontrado';
    } else if (hasSearch || hasCategory) {
        message = `${count} curso${count !== 1 ? 's' : ''} encontrado${count !== 1 ? 's' : ''}`;
        
        if (hasSearch && searchInput.value) {
            message += ` para "${searchInput.value}"`;
        }
        if (hasCategory && categoryFilter.value) {
            message += ` na categoria "${categoryFilter.value}"`;
        }
    } else {
        message = `${count} cursos disponíveis`;
    }
    
    searchResultsInfo.textContent = message;
}

// Renderizar cursos
function renderCourses(coursesToRender) {
    if (!coursesGrid) return;

    coursesGrid.innerHTML = '';

    const hasSearch = searchInput.value.trim() !== '';
    const hasCategory = categoryFilter.value !== '';
    
    updateResultsCount(coursesToRender.length, hasSearch, hasCategory);

    if (coursesToRender.length === 0) {
        coursesGrid.innerHTML = `
            <div class="no-courses">
                <i class="fas fa-search"></i>
                <h3>Nenhum curso encontrado</h3>
                <p>Tente ajustar seus filtros de busca ou categoria</p>
                ${hasSearch || hasCategory ? '<button class="clear-btn" onclick="clearFilters()">Limpar Filtros</button>' : ''}
            </div>
        `;
        return;
    }

    coursesToRender.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.setAttribute('data-category', course.category);

        // REMOVIDO: A lógica de badges foi completamente removida
        
        courseCard.innerHTML = `
            <div class="course-image">
                <img src="${course.image}" alt="${course.title}" loading="lazy">
                <div class="course-badges">
                    <!-- Sem badges por enquanto -->
                </div>
            </div>
            <div class="course-content">
                <h3 class="course-title">${course.title}</h3>
                <div class="course-details">
                    <div class="course-meta">
                        <div class="course-lessons">
                            <i class="fas fa-play-circle"></i>
                            <span>${course.lessons} aulas</span>
                        </div>
                        <div class="course-duration">
                            <i class="fas fa-clock"></i>
                            <span>${course.duration}h</span>
                        </div>
                    </div>
                </div>
                <a href="${course.link}" class="course-btn" target="_blank" rel="noopener noreferrer">
                    <i class="fas fa-external-link-alt"></i>
                    Acessar Curso
                </a>
            </div>
        `;

        coursesGrid.appendChild(courseCard);
    });
}

// Aplicar filtros
function applyFilters() {
    let result = [...courses];
    const searchTerm = searchInput.value.trim();
    const category = categoryFilter.value;
    const sort = sortFilter.value;

    // Aplicar busca
    if (searchTerm) {
        result = advancedSearch(searchTerm);
    }

    // Aplicar filtro de categoria
    if (category) {
        result = result.filter(course => course.category === category);
    }

    // Aplicar ordenação
    switch (sort) {
        case 'title':
            result.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'lessons':
            result.sort((a, b) => b.lessons - a.lessons);
            break;
        case 'duration':
            result.sort((a, b) => b.duration - a.duration);
            break;
        case 'recent':
            result.sort((a, b) => b.id - a.id);
            break;
    }

    renderCourses(result);
    
    // Mostrar/ocultar botão de limpar filtros
    if (clearFiltersBtn) {
        if (searchTerm || category || sort !== '') {
            clearFiltersBtn.style.display = 'block';
        } else {
            clearFiltersBtn.style.display = 'none';
        }
    }
}

// Limpar todos os filtros
function clearFilters() {
    searchInput.value = '';
    categoryFilter.value = '';
    sortFilter.value = '';
    applyFilters();
    
    if (clearFiltersBtn) {
        clearFiltersBtn.style.display = 'none';
    }
}

// Menu mobile
function toggleMobileMenu() {
    navbar.classList.toggle('mobile-active');
    mobileOverlay.classList.toggle('active');

    const icon = mobileMenuToggle.querySelector('i');
    if (navbar.classList.contains('mobile-active')) {
        icon.className = 'fas fa-times';
        navbar.classList.add('expanded');
    } else {
        icon.className = 'fas fa-bars';
        navbar.classList.remove('expanded');
    }
}

// Controle da navbar no desktop
function handleNavbarBehavior() {
    if (window.innerWidth > 768) {
        let hoverTimeout;

        navbar.addEventListener('mouseenter', () => {
            clearTimeout(hoverTimeout);
            navbar.classList.add('expanded');
        });

        navbar.addEventListener('mouseleave', () => {
            hoverTimeout = setTimeout(() => {
                navbar.classList.remove('expanded');
            }, 500);
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (!navbar.classList.contains('expanded')) {
                    navbar.classList.add('expanded');
                    setTimeout(() => {
                        navbar.classList.remove('expanded');
                    }, 2000);
                }
            });
        });
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function () {
    // Gerar categorias
    generateCategories();
    
    // Renderizar cursos inicialmente
    renderCourses(courses);

    // Event listeners para filtros
    searchInput.addEventListener('input', () => {
        // Debounce para melhor performance
        clearTimeout(searchInput.timeout);
        searchInput.timeout = setTimeout(applyFilters, 300);
    });
    
    categoryFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);

    // Botão de limpar filtros
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearFilters);
    }

    // Menu mobile
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    }

    if (mobileOverlay) {
        mobileOverlay.addEventListener('click', toggleMobileMenu);
    }

    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMobileMenu();
            }
        });
    });

    // Configura navbar desktop
    handleNavbarBehavior();

    // Redimensionamento da janela
    window.addEventListener('resize', handleNavbarBehavior);
    
    // Adicionar suporte para tecla Enter na busca
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });
});