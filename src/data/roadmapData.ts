import {
    Cpu, Network, Globe, Layers, Shield,
    Code, Cloud, Server,
    Key, Zap, Bug, FileCode
} from 'lucide-react';

export interface SubTopic {
    title: string;
    items: string[];
}

export interface RoadmapTopic {
    id: string;
    title: string;
    category: string;
    icon: any;
    description: string;
    subTopics: SubTopic[];
}

export const roadmapData: RoadmapTopic[] = [
    // --- IT FUNDAMENTALS ---
    {
        id: 'hardware',
        title: 'Computer Hardware',
        category: 'IT Fundamentals',
        icon: Cpu,
        description: 'Understanding the physical components of a computer.',
        subTopics: [
            { title: 'Components', items: ['CPU / Processor', 'RAM / Memory', 'Motherboard', 'Storage (SSD/HDD)', 'GPU', 'PSU', 'Cooling'] },
            { title: 'Peripherals', items: ['Input Devices', 'Output Devices', 'Interfaces (USB, HDMI, etc.)'] },
            { title: 'Troubleshooting', items: ['POST', 'BIOS/UEFI', 'Boot Sequence', 'Hardware Diagnostics'] }
        ]
    },
    {
        id: 'networking',
        title: 'Networking Basics',
        category: 'IT Fundamentals',
        icon: Network,
        description: 'The backbone of the internet and communication.',
        subTopics: [
            { title: 'OSI Model', items: ['Physical Layer', 'Data Link Layer', 'Network Layer', 'Transport Layer', 'Session Layer', 'Presentation Layer', 'Application Layer'] },
            { title: 'TCP/IP', items: ['TCP vs UDP', 'IP Addressing (IPv4/IPv6)', 'Subnetting', 'CIDR', 'Ports & Sockets'] },
            { title: 'Protocols', items: ['HTTP/HTTPS', 'DNS', 'DHCP', 'FTP/SFTP', 'SSH', 'SMTP/IMAP/POP3', 'ARP', 'ICMP'] },
            { title: 'Devices', items: ['Routers', 'Switches', 'Firewalls', 'Access Points', 'Modems'] }
        ]
    },
    {
        id: 'os',
        title: 'Operating Systems',
        category: 'IT Fundamentals',
        icon: Server,
        description: 'Managing hardware and software resources.',
        subTopics: [
            { title: 'Windows', items: ['File System (NTFS)', 'Registry', 'Services', 'Active Directory', 'PowerShell', 'Permissions (ACLs)'] },
            { title: 'Linux', items: ['File System (ext4, xfs)', 'Kernel', 'Shell (Bash/Zsh)', 'Permissions (chmod/chown)', 'Package Management', 'Process Management'] },
            { title: 'macOS', items: ['Unix-based Architecture', 'APFS', 'Terminal', 'System Preferences'] }
        ]
    },
    {
        id: 'virtualization',
        title: 'Virtualization',
        category: 'IT Fundamentals',
        icon: Layers,
        description: 'Creating virtual versions of resources.',
        subTopics: [
            { title: 'Hypervisors', items: ['Type 1 (Bare Metal)', 'Type 2 (Hosted)', 'ESXi', 'Hyper-V', 'VirtualBox', 'VMware Workstation'] },
            { title: 'Containers', items: ['Docker', 'Kubernetes', 'Containerization vs Virtualization'] },
            { title: 'Cloud Concepts', items: ['Virtual Machines (EC2/VMs)', 'Virtual Networks (VPC/VNet)'] }
        ]
    },
    // --- PROGRAMMING ---
    {
        id: 'programming',
        title: 'Programming Skills',
        category: 'Development',
        icon: Code,
        description: 'Coding for automation and exploitation.',
        subTopics: [
            { title: 'Python', items: ['Scripting', 'Automation', 'Requests Lib', 'Socket Programming', 'Scapy'] },
            { title: 'JavaScript', items: ['DOM Manipulation', 'XSS Payloads', 'Node.js', 'React (for tools)'] },
            { title: 'Bash/Shell', items: ['Scripting', 'Pipelines', 'Regex', 'System Admin Tasks'] },
            { title: 'Go', items: ['Concurrency', 'High Performance Tools', 'Networking'] },
            { title: 'C/C++', items: ['Memory Management', 'Buffer Overflows', 'Pointers', 'System Calls'] }
        ]
    },
    // --- SECURITY ---
    {
        id: 'cyber-threats',
        title: 'Cyber Threats',
        category: 'Security',
        icon: Bug,
        description: 'Understanding the adversary.',
        subTopics: [
            { title: 'Malware', items: ['Virus', 'Worm', 'Trojan', 'Ransomware', 'Spyware', 'Rootkit'] },
            { title: 'Social Engineering', items: ['Phishing', 'Vishing', 'Smishing', 'Pretexting', 'Tailgating'] },
            { title: 'Advanced Threats', items: ['APT (Advanced Persistent Threats)', 'Zero-Day Exploits', 'Insider Threats'] }
        ]
    },
    {
        id: 'network-security',
        title: 'Network Security',
        category: 'Security',
        icon: Shield,
        description: 'Securing the network infrastructure.',
        subTopics: [
            { title: 'Defensive Tools', items: ['Firewalls (Stateful/Stateless)', 'IDS/IPS', 'VPN', 'Honeypots', 'DMZ'] },
            { title: 'Monitoring', items: ['SIEM', 'Packet Analysis (Wireshark)', 'Log Analysis', 'Network Flows'] },
            { title: 'Attacks', items: ['DoS/DDoS', 'Man-in-the-Middle', 'ARP Spoofing', 'DNS Poisoning', 'Port Scanning'] }
        ]
    },
    {
        id: 'app-security',
        title: 'App Security',
        category: 'Security',
        icon: Globe,
        description: 'Securing web and software applications.',
        subTopics: [
            { title: 'OWASP Top 10', items: ['Injection (SQLi, Command)', 'Broken Auth', 'Sensitive Data Exposure', 'XXE', 'XSS', 'Insecure Deserialization'] },
            { title: 'Secure Coding', items: ['Input Validation', 'Output Encoding', 'Authentication & Authorization', 'Error Handling'] },
            { title: 'Testing', items: ['SAST', 'DAST', 'Fuzzing', 'Code Review'] }
        ]
    },
    {
        id: 'cryptography',
        title: 'Cryptography',
        category: 'Security',
        icon: Key,
        description: 'Protecting information through encryption.',
        subTopics: [
            { title: 'Concepts', items: ['Symmetric vs Asymmetric', 'Hashing', 'Salting', 'Digital Signatures', 'PKI'] },
            { title: 'Algorithms', items: ['AES', 'RSA', 'ECC', 'SHA-256', 'MD5 (Legacy)'] },
            { title: 'Protocols', items: ['SSL/TLS', 'IPsec', 'PGP/GPG'] }
        ]
    },
    // --- CLOUD ---
    {
        id: 'cloud-security',
        title: 'Cloud Security',
        category: 'Cloud',
        icon: Cloud,
        description: 'Securing cloud environments.',
        subTopics: [
            { title: 'Providers', items: ['AWS', 'Azure', 'GCP'] },
            { title: 'Concepts', items: ['Shared Responsibility Model', 'IAM', 'Security Groups', 'Compliance'] },
            { title: 'Tools', items: ['CloudTrail', 'GuardDuty', 'Azure Sentinel', 'Cloud Armor'] }
        ]
    },
    // --- CERTIFICATIONS ---
    {
        id: 'certifications',
        title: 'Certifications',
        category: 'Validation',
        icon: FileCode,
        description: 'Standard industry certifications.',
        subTopics: [
            { title: 'Beginner', items: ['CompTIA A+', 'CompTIA Network+', 'CompTIA Security+', 'ISC2 CC'] },
            { title: 'Intermediate', items: ['CEH (Certified Ethical Hacker)', 'CySA+', 'SSCP', 'GSEC'] },
            { title: 'Advanced', items: ['OSCP', 'CISSP', 'CISM', 'CISA', 'CASP+'] }
        ]
    },
    // --- CTF ---
    {
        id: 'ctf',
        title: 'CTF Platforms',
        category: 'Practice',
        icon: Zap,
        description: 'Hands-on practice environments.',
        subTopics: [
            { title: 'Advanced Platform', items: ['gopwnit'] }
        ]
    }
];
