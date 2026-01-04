   // Dados dos cursos
        const courses = [
            
                {
                    "id": 1,
                    "title": "Html e Css",
                    "category": "Html",
                    "lessons": 263,
                    "duration": 64,
                    "image": "https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white",
                    "link": "https://t.me/c/2606208161/1796"
                },
                {
                    "id": 2,
                    "title": "Java Script",
                    "category": "Front-end",
                    "lessons": 36,
                    "duration": 28,
                    "image": "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                    "link": "https://t.me/c/2606208161/2746"
                },
                {
                    "id": 3,
                    "title": "Full Stack Java Script",
                    "author": "",
                    "category": "JavaScript",
                    "lessons": 42,
                    "duration": 35,
                    "image": "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black",
                    "link": "https://t.me/c/2606208161/14389"
                },
                {
                    "id": 4,
                    "title": "Formação-Full Stack Javascript",
                    "category": "Full Stack",
                    "lessons": 30,
                    "duration": 25,
                    "image": "https://img.shields.io/badge/Full%20Stack-JavaScript-yellow",
                    "link": "https://t.me/c/2606208161/20215"
                },
                {
                    "id": 5,
                    "title": "React Native na Prática: Apps para iOS e Android 2023",
                    "category": "Front-end",
                    "lessons": 48,
                    "duration": 40,
                    "image": "https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB",
                    "link": "https://t.me/c/2606208161/17899"
                },
                {
                    "id": 6,
                    "title": "Pythin FIAP",
                    "author": "Laura Costa",
                    "category": "Data Science",
                    "lessons": 32,
                    "duration": 26,
                    "image": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
                    "badges": [],
                    "link": "https://t.me/c/2606208161/17338 "
                },
                {
                    "id": 7,
                    "title": "Python 3 do Básico ao Avançado꞉ com projetos reais",
                    "category": "DevOps",
                    "lessons": 38,
                    "duration": 32,
                    "image": "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white",
                    "link": "https://t.me/c/2606208161/20883"
                },
                {
                    "id": 8,
                    "title": "Profissão - Desenvolvedor Full Stack",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Full%20Stack-Developer-blue",
                    "link": "https://t.me/c/2606208161/21609"
                },
                {
                    "id": 9,
                    "title": "Criando Robôs com Python: Automatizado",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Python-Robotics-3776AB",
                    "link": "https://t.me/c/2606208161/21970"
                },
                {
                    "id": 10,
                    "title": "Python para Análise de Dados",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Python-Data%20Analysis-3776AB",
                    "link": "https://t.me/c/2606208161/21994"
                },
                {
                    "id": 11,
                    "title": "Python Para Data Science e Machine Learning",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Python-ML%2FDS-3776AB",
                    "link": "https://t.me/c/2606208161/22009"
                },
                {
                    "id": 12,
                    "title": "Dashboards com Python",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Python-Dashboards-3776AB",
                    "link": "https://t.me/c/2606208161/22080"
                },
                {
                    "id": 13,
                    "title": "Django Master",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white",
                    "link": "https://t.me/c/2606208161/22156"
                },
                {
                    "id": 14,
                    "title": "Formação Python Para Finanças",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Python-Finance-3776AB",
                    "link": "https://t.me/c/2606208161/22302"
                },
                {
                    "id": 15,
                    "title": "C++ Básico ao Avançado",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/C%2B%2B-00599C?style=for-the-badge&logo=c%2B%2B&logoColor=white",
                    "link": "https://t.me/c/2606208161/22529"
                },
                {
                    "id": 16,
                    "title": "Aprendendo a Criar Games com C++ e a Unreal Engine 4",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Unreal%20Engine-0E1128?style=for-the-badge&logo=unrealengine&logoColor=white",
                    "link": "https://t.me/c/2606208161/22561"
                },
                {
                    "id": 17,
                    "title": "C# Experts - Dometrai",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white",
                    "link": "https://t.me/c/2606208161/22589"
                },
                {
                    "id": 18,
                    "title": "Curso de NestJS do Zero ao avançado",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/NestJS-E0234E?style=for-the-badge&logo=nestjs&logoColor=white",
                    "link": "https://t.me/c/2606208161/18350"
                },
                {
                    "id": 19,
                    "title": "Full Stack PHP Developer",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white",
                    "link": "https://t.me/c/2606208161/27510"
                },
                {
                    "id": 20,
                    "title": "PHP - Programando com Orientação a Objetos",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/PHP-OOP-777BB4",
                    "link": "https://t.me/c/2606208161/27735"
                },
                {
                    "id": 21,
                    "title": "Formação PHP Completa",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/PHP-Complete-777BB4",
                    "link": "https://t.me/c/2606208161/27891"
                },
                {
                    "id": 22,
                    "title": "Golang Intensivo - Full Cycle",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Go-00ADD8?style=for-the-badge&logo=go&logoColor=white",
                    "link": "https://t.me/c/2606208161/17704 "
                },
                {
                    "id": 23,
                    "title": "Go Expert",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Go-Expert-00ADD8",
                    "link": "https://t.me/c/2606208161/18408"
                },
                {
                    "id": 24,
                    "title": "TypeScript do básico ao avançado",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
                    "link": "https://t.me/c/2606208161/26458"
                },
                {
                    "id": 25,
                    "title": "Curso de Angular 2 (v17+) Typescript do Básico ao Avançado",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white",
                    "link": "https://t.me/c/2606208161/26898"
                },
                {
                    "id": 26,
                    "title": "SQL para Análise de Dados",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/SQL-Data%20Analysis-4479A1",
                    "link": "https://t.me/c/2606208161/25750"
                },
                {
                    "id": 27,
                    "title": "SQL do Básico ao Avançado",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/SQL-Database-4479A1",
                    "link": "https://t.me/c/2606208161/25808"
                },
                {
                    "id": 28,
                    "title": "SQL Para Análise de Dados",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/SQL-Analytics-4479A1",
                    "link": "https://t.me/c/2606208161/25835"
                },
                {
                    "id": 29,
                    "title": "aplicativos web e mobile sem programação",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/No%20Code-Apps-green",
                    "link": "https://t.me/c/2606208161/5473"
                },
                {
                    "id": 30,
                    "title": "Desenvolvimento Web",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Web%20Development-Full%20Stack-blue",
                    "link": "https://t.me/c/2606208161/7245 "
                },
                {
                    "id": 31,
                    "title": "Imersão DotNet Expert",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white",
                    "link": "https://t.me/c/2606208161/18748 "
                },
                {
                    "id": 32,
                    "title": "Domine a criação de imagens com Inteligência Artificial",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/AI-Images-FF6B6B",
                    "link": "https://t.me/c/2606208161/17283 "
                },
                {
                    "id": 33,
                    "title": "back end full stack",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Backend-Full%20Stack-6C63FF",
                    "link": "https://t.me/c/2606208161/6705"
                },
                {
                    "id": 34,
                    "title": "front end da webmaster",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Frontend-Webmaster-4FC08D",
                    "link": "https://t.me/c/2606208161/7327"
                },
                {
                    "id": 35,
                    "title": "Imersão Full Stack - Full Cycle ",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Full%20Stack-Immersão-6C63FF",
                    "link": "https://t.me/c/2606208161/18727"
                },
                {
                    "id": 36,
                    "title": "Unity do zero ao profissonal",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Unity-100000?style=for-the-badge&logo=unity&logoColor=white",
                    "link": "https://t.me/c/2606208161/7419"
                },
                {
                    "id": 37,
                    "title": "Análise Forense de Malware-Clavis",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Malware-Forensics-red",
                    "link": "https://t.me/c/2606208161/4829"
                },
                {
                    "id": 38,
                    "title": "Analise Forense de Sistemas-Clavis",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/System-Forensics-red",
                    "link": "https://t.me/c/2606208161/4802 "
                },
                {
                    "id": 39,
                    "title": "Machine Learning com PyCaret",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Machine%20Learning-PyCaret-3776AB",
                    "link": "https://t.me/c/2606208161/16786 "
                },
                {
                    "id": 40,
                    "title": "Imersão Full Stack: Golang, Docker, Kafka, Nest.js, Next.js, K8s - Full Cycle ",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Full%20Stack-Cloud%20Native-6C63FF",
                    "link": "https://t.me/c/2606208161/16804"
                },
                {
                    "id": 41,
                    "title": "Cypress eXpress",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Cypress-Testing-17202C",
                    "link": "https://t.me/c/2606208161/18110 "
                },
                {
                    "id": 42,
                    "title": "N8N Setup - automic",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/N8N-Automation-4C51BF",
                    "link": "https://t.me/c/2606208161/33336"
                },
                {
                    "id": 43,
                    "title": "Automação Sem Limites",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Automation-No%20Limits-4C51BF",
                    "link": "https://t.me/c/2606208161/33383"
                },
                {
                    "id": 44,
                    "title": "DevOps_Cloud",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/DevOps-Cloud-007396",
                    "link": "https://t.me/c/2606208161/18712"
                },
                {
                    "id": 45,
                    "title": "Reels Culinários – Escola Para Criadores ",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Reels-Culinary-FF0000",
                    "link": "https://t.me/c/2606208161/28504"
                },
                {
                    "id": 46,
                    "title": "Reels do Zero ao Avançado",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Reels-Advanced-FF0000",
                    "link": "https://t.me/c/2606208161/30285"
                },
                {
                    "id": 48,
                    "title": "mkt A Nova Moeda - Hyeser",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Marketing-Digital-FF6B6B",
                    "link": "https://t.me/c/2606208161/30509"
                },
                {
                    "id": 49,
                    "title": "Treinamento Além da Prospecção 2.0 ",
                    "category": "Design",
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
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Traffic-ROI-FF6B35",
                    "link": "https://t.me/c/2606208161/32038"
                },
                {
                    "id": 52,
                    "title": "Hotmart: Elxpro BR",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/E-commerce-Expert-FF6B35",
                    "link": "https://t.me/c/2606208161/17385"
                },
                {
                    "id": 53,
                    "title": "Formula Top Afiliado",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Affiliate-Marketing-FFD700",
                    "link": "https://t.me/c/2606208161/32321"
                },
                {
                    "id": 54,
                    "title": "Venda Sempre com IA - Black Rat",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/AI-Sales-000000",
                    "link": "https://t.me/c/2606208161/32717"
                },
                {
                    "id": 55,
                    "title": "Jornada Afiliado Pro (Completo)",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Affiliate-Pro-FFD700",
                    "link": "https://t.me/c/2606208161/32787 "
                },
                {
                    "id": 56,
                    "title": "Print On Demand (Atualizado e Corrigido) ",
                    category: "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Print%20On%20Demand-Ecommerce-FF6B35",
                    "link": "https://t.me/c/2606208161/33095"
                },
                {
                    "id": 57,
                    "title": "CF - (Hustle Minds) ",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Course-Flip-Hustle",
                    "link": "https://t.me/c/2606208161/33204"
                },
                {
                    "id": 58,
                    "title": "Espionagem Digital",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Digital-Espionage-black",
                    "link": "https://t.me/c/2606208161/33239"
                },
                {
                    "id": 59,
                    "title": "IA Revolution Academy 2.0",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/AI-Revolution-00C2FF",
                    "link": "https://t.me/c/2606208161/33259"
                },
                {
                    "id": 60,
                    "title": "N8N Setup - Autotic",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/N8N-Automation-4C51BF",
                    "link": "https://t.me/c/2606208161/33336"
                },
                {
                    "id": 61,
                    "title": "Automação Sem Limites",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Automation-Unlimited-4C51BF",
                    "link": "https://t.me/c/2606208161/33383"
                },
                {
                    "id": 62,
                    "title": "Mentoria Marca Milionária  (Completo e Atualizado)",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Brand-Millionaire-FFD700",
                    "link": "https://t.me/c/2606208161/33528"
                },
                {
                    "id": 63,
                    "title": "cybersegurança hackone",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Cybersecurity-HackOne-red",
                    "link": "https://t.me/c/2606208161/4036"
                },
                {
                    "id": 64,
                    "title": "hackeando com android",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Hacking-Android-3DDC84",
                    "link": "https://t.me/c/2606208161/4150"
                },
                {
                    "id": 65,
                    "title": "pentest profissional desec",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Pentest-Professional-red",
                    "link": "https://t.me/c/2606208161/4180 "
                },
                {
                    "id": 66,
                    "title": "web hacking na pratica",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Web%20Hacking-Practical-red",
                    "link": "https://t.me/c/2606208161/674"
                },
                {
                    "id": 67,
                    "title": "Web Hacking na Prática 2.0 - Crowsec Segurança Ofensiva",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Web%20Hacking-2.0-red",
                    "link": "https://t.me/c/2606208161/15607 "
                },
                {
                    "id": 68,
                    "title": "Pentest Professional Híbrido - CySource",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Pentest-Hybrid-red",
                    "link": "https://t.me/c/2606208161/15655Pacote "
                },
                {
                    "id": 69,
                    "title": " Analista de Defesa Cibernética",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Cyber%20Defense-Analyst-blue",
                    "link": "https://t.me/c/2606208161/16203 "
                },
                {
                    "id": 70,
                    "title": "Analista de Ataque Cibernético",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Cyber%20Attack-Analyst-red",
                    "link": "https://t.me/c/2606208161/16240"
                },
                {
                    "id": 71,
                    "title": "Formação em Cybersegurança - Hackersec",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Cybersecurity-Formation-red",
                    "link": "https://t.me/c/2606208161/16262"
                },
                {
                    "id": 72,
                    "title": "Python para Pentest",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Python-Pentest-3776AB",
                    "link": "https://t.me/c/2606208161/16304 "
                },
                {
                    "id": 73,
                    "title": "Teste de Intrusão em Rede Wireless - Solyd",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Wireless-Pentest-red",
                    "link": "https://t.me/c/2606208161/16321 "
                },
                {
                    "id": 74,
                    "title": "WiFi Hacking Enterprise 2.0 DESEC Security",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/WiFi%20Hacking-Enterprise-red",
                    "link": "https://t.me/c/2606208161/16384 "
                },
                {
                    "id": 75,
                    "title": "Criptografia - 0x65-Desec",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Cryptography-Encryption-blue",
                    "link": "https://t.me/c/2606208161/16333"
                },
                {
                    "id": 76,
                    "title": "#",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Placeholder-Course-lightgrey",
                    "link": "#"
                },
                {
                    "id": 76,
                    "title": "Universidade Hacker",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Hacker-University-red",
                    "link": "https://t.me/c/2606208161/16611"
                },
                {
                    "id": 77,
                    "title": "Pato Academy: Do Bug ao Bountry ",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Bug%20Bounty-Pato%20Academy-green",
                    "link": "https://t.me/c/2606208161/16504 "
                },
                {
                    "id": 78,
                    "title": "Cursos de Ingles",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/English-Course-blue",
                    "link": "https://t.me/c/2606208161/28657 "
                },
                {
                    "id": 79,
                    "title": "Cursos de Frances",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/French-Course-blue",
                    "link": "https://t.me/c/2606208161/28663"
                },
                {
                    "id": 80,
                    "title": "Cursos de Alemao",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/German-Course-black",
                    "link": "https://t.me/c/2606208161/28667"
                },
                {
                    "id": 81,
                    "title": "Cursos de Russo",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Russian-Course-red",
                    "link": "https://t.me/c/2606208161/28659"
                },
                {
                    "id": 82,
                    "title": "Cursos de Coreano",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Korean-Course-blue",
                    "link": "https://t.me/c/2606208161/28531c"
                },
                {
                    "id": 83,
                    "title": "Cursos de Italino",
                    "category": "Design",
                    "lessons": 28,
                    "duration": 22,
                    "image": "https://img.shields.io/badge/Italian-Course-green",
                    "link": "https://t.me/c/2606208161/28665 "
                },
                {
                    "id": 84,
                    "title": "Cursos de Mandarim",
                    "category": "Design",
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
                    "link": "https://t.me/c/2606208161/28440 "
                }
            ]


        ;

        // Elementos DOM
        const coursesGrid = document.getElementById('coursesGrid');
        const searchInput = document.getElementById('searchInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const sortFilter = document.getElementById('sortFilter');
        const mobileMenuToggle = document.getElementById('mobileMenuToggle');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const navbar = document.getElementById('navbar');

        // Renderizar cursos
        function renderCourses(coursesToRender) {
            if (!coursesGrid) return;

            coursesGrid.innerHTML = '';

            if (coursesToRender.length === 0) {
                coursesGrid.innerHTML = `
                    <div class="no-courses">
                        <i class="fas fa-search"></i>
                        <h3>Nenhum curso encontrado</h3>
                        <p>Tente ajustar seus filtros de busca ou categoria</p>
                    </div>
                `;
                return;
            }

            coursesToRender.forEach(course => {
                const courseCard = document.createElement('div');
                courseCard.className = 'course-card';

                let badgesHTML = '';
                if (course.badges && course.badges.length > 0) {
                    course.badges.forEach(badge => {
                        const badgeClass = badge === "Premium" ? "premium" : "bestseller";
                        badgesHTML += `<span class="badge ${badgeClass}">${badge}</span>`;
                    });
                }

                courseCard.innerHTML = `
                    <div class="course-image">
                        <img src="${course.image}" alt="${course.title}" loading="lazy">
                        <div class="course-badges">
                            ${badgesHTML}
                        </div>
                    </div>
                    <div class="course-content">
                        <h3 class="course-title">${course.title}</h3>
                        <div class="course-author">
                            <i class=""></i>
                            <span>${course.author}</span>
                        </div>
                        <div class="course-details">
                            <div class="course-lessons">
                                <i class="fas fa-play-circle"></i>
                                <span>${course.lessons} aulas</span>
                            </div>
                            <div class="course-duration">
                                <i class="fas fa-clock"></i>
                                <span>${course.duration}h</span>
                            </div>
                        </div>
                        <a href="${course.link}" class="course-btn" target="_blank">
                            Acessar Curso
                        </a>
                    </div>
                `;

                coursesGrid.appendChild(courseCard);
            });
        }

        // NOVO SISTEMA DE FILTROS
        function applyFilters() {
            let result = [...courses];

            const search = searchInput.value.toLowerCase();
            const category = categoryFilter.value;
            const sort = sortFilter.value;

            if (search) {
                result = result.filter(course =>
                    course.title.toLowerCase().includes(search) ||
                    course.author.toLowerCase().includes(search) ||
                    course.category.toLowerCase().includes(search)
                );
            }

            if (category) {
                result = result.filter(course => course.category === category);
            }

            if (sort === 'title') {
                result.sort((a, b) => a.title.localeCompare(b.title));
            }

            if (sort === 'lessons') {
                result.sort((a, b) => b.lessons - a.lessons);
            }

            if (sort === 'duration') {
                result.sort((a, b) => b.duration - a.duration);
            }

            renderCourses(result);
        }

        // Menu mobile
        function toggleMobileMenu() {
            navbar.classList.toggle('mobile-active');
            mobileOverlay.classList.toggle('active');

            // Toggle ícone do botão
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
                // Em desktop, fecha navbar após 3 segundos sem hover
                let hoverTimeout;

                navbar.addEventListener('mouseenter', () => {
                    clearTimeout(hoverTimeout);
                    navbar.classList.add('expanded');
                });

                navbar.addEventListener('mouseleave', () => {
                    hoverTimeout = setTimeout(() => {
                        navbar.classList.remove('expanded');
                    }, 500); // Fecha após 0.5 segundos sem hover
                });

                // Expande ao clicar para navegar
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

        // Event Listeners
        document.addEventListener('DOMContentLoaded', function () {
            // Renderizar cursos inicialmente
            renderCourses(courses);

            // NOVO: Conectar os eventos dos filtros
            searchInput.addEventListener('input', applyFilters);
            categoryFilter.addEventListener('change', applyFilters);
            sortFilter.addEventListener('change', applyFilters);

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
        });