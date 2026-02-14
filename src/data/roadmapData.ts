
import {
    Cpu, Network, Globe, Shield,
    Code, Cloud, Server,
    Key, Zap, Bug, FileCode
} from 'lucide-react';

export interface Resource {
    title: string;
    url: string;
    type: 'article' | 'video' | 'course' | 'tool';
}

export interface RoadmapItem {
    id: string;
    name: string;
    description: string;
    resources?: Resource[];
}

export interface SubTopic {
    title: string;
    items: RoadmapItem[];
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
            {
                title: 'Components',
                items: [
                    { id: 'cpu', name: 'CPU / Processor', description: 'The Central Processing Unit is the brain of the computer, executing instructions and performing calculations. Key concepts include cores, clock speed, and architecture (x86, ARM).', resources: [{ title: 'How CPUs Work', url: '#', type: 'article' }] },
                    { id: 'ram', name: 'RAM / Memory', description: 'Random Access Memory is volatile storage used for currently running programs and data. Faster than storage but loses data when power is off.', resources: [] },
                    { id: 'mobo', name: 'Motherboard', description: 'The main circuit board connecting all components. It houses the CPU socket, RAM slots, and bus interfaces.', resources: [] },
                    { id: 'storage', name: 'Storage (SSD/HDD)', description: 'Non-volatile data storage. SSDs use flash memory for speed, while HDDs use spinning magnetic platters for capacity.', resources: [] },
                    { id: 'gpu', name: 'GPU', description: 'Graphics Processing Unit, specialized for rendering images and parallel processing tasks like password cracking.', resources: [] },
                    { id: 'psu', name: 'PSU', description: 'Power Supply Unit converts outlet power (AC) to DC power usable by internal components.', resources: [] },
                    { id: 'cooling', name: 'Cooling', description: 'Systems to dissipate heat, preventing thermal throttling. Includes air (fans/sinks) and liquid cooling.', resources: [] }
                ]
            },
            {
                title: 'Peripherals',
                items: [
                    { id: 'input', name: 'Input Devices', description: 'Hardware to send data to the computer (Keyboard, Mouse, Scanner, Microphone). Keyloggers exploit these.', resources: [] },
                    { id: 'output', name: 'Output Devices', description: 'Hardware that receives data from the computer (Monitor, Printer, Speakers).', resources: [] },
                    { id: 'interfaces', name: 'Interfaces', description: 'Ports and standards for connection: USB, HDMI, DisplayPort, SATA, PCIe.', resources: [] }
                ]
            },
            {
                title: 'Troubleshooting',
                items: [
                    { id: 'post', name: 'POST', description: 'Power-On Self-Test. A diagnostic sequence run by the BIOS/UEFI on startup to check hardware health.', resources: [] },
                    { id: 'bios', name: 'BIOS/UEFI', description: 'Firmware that initializes hardware and boots the OS. UEFI is the modern, secure replacement for legacy BIOS.', resources: [] },
                    { id: 'boot', name: 'Boot Sequence', description: 'The order in which devices are checked for a bootable OS (e.g., USB -> CD -> SSD).', resources: [] },
                    { id: 'diag', name: 'Hardware Diagnostics', description: 'Tools and methods to identify failing components (e.g., MemTest86 for RAM).', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'networking',
        title: 'Networking Basics',
        category: 'IT Fundamentals',
        icon: Network,
        description: 'The backbone of the internet and communication.',
        subTopics: [
            {
                title: 'OSI Model',
                items: [
                    { id: 'phy', name: 'Physical Layer', description: 'Layer 1: Cables, fibers, hubs. Transmission of raw bit streams.', resources: [] },
                    { id: 'datalink', name: 'Data Link Layer', description: 'Layer 2: MAC addresses, switches, frames. Node-to-node transfer.', resources: [] },
                    { id: 'network', name: 'Network Layer', description: 'Layer 3: IP addresses, routers, packets. Path determination and routing.', resources: [] },
                    { id: 'transport', name: 'Transport Layer', description: 'Layer 4: TCP/UDP, ports. End-to-end connections and reliability.', resources: [] },
                    { id: 'session', name: 'Session Layer', description: 'Layer 5: Session management between applications.', resources: [] },
                    { id: 'presentation', name: 'Presentation Layer', description: 'Layer 6: Data translation, encryption, compression.', resources: [] },
                    { id: 'app', name: 'Application Layer', description: 'Layer 7: User-facing protocols (HTTP, FTP, SMTP).', resources: [] }
                ]
            },
            {
                title: 'TCP/IP',
                items: [
                    { id: 'tcp-udp', name: 'TCP vs UDP', description: 'TCP is connection-oriented and reliable (3-way handshake). UDP is connectionless and fast (streaming).', resources: [] },
                    { id: 'ip', name: 'IP Addressing', description: 'IPv4 (32-bit) vs IPv6 (128-bit). Private vs Public IP ranges.', resources: [] },
                    { id: 'subnet', name: 'Subnetting', description: 'Dividing networks into smaller, manageable sub-networks for performance and security.', resources: [] },
                    { id: 'cidr', name: 'CIDR', description: 'Classless Inter-Domain Routing. Notation for subnet masks (e.g., /24).', resources: [] },
                    { id: 'ports', name: 'Ports & Sockets', description: 'Virtual endpoints for communication. Port 80 (HTTP), 443 (HTTPS), 22 (SSH).', resources: [] }
                ]
            },
            {
                title: 'Protocols',
                items: [
                    { id: 'http', name: 'HTTP/HTTPS', description: 'Hypertext Transfer Protocol. HTTPS adds TLS encryption for security.', resources: [] },
                    { id: 'dns', name: 'DNS', description: 'Domain Name System. Translates human-readable names (google.com) to IP addresses.', resources: [] },
                    { id: 'dhcp', name: 'DHCP', description: 'Dynamic Host Configuration Protocol. Assigns IP addresses automatically.', resources: [] },
                    { id: 'ssh', name: 'SSH', description: 'Secure Shell. Encrypted remote login protocol, replacing Telnet.', resources: [] },
                    { id: 'ftp', name: 'FTP/SFTP', description: 'File Transfer Protocol. SFTP uses SSH for secure transfer.', resources: [] }
                ]
            },
            {
                title: 'Devices',
                items: [
                    { id: 'routers', name: 'Routers', description: 'Devices that forward packets between networks (Layer 3).', resources: [] },
                    { id: 'switches', name: 'Switches', description: 'Devices that connect devices within a network (Layer 2), using MAC addresses.', resources: [] },
                    { id: 'firewalls', name: 'Firewalls', description: 'Security devices controlling traffic based on rules.', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'os',
        title: 'Operating Systems',
        category: 'IT Fundamentals',
        icon: Server,
        description: 'Managing hardware and software resources.',
        subTopics: [
            {
                title: 'Windows',
                items: [
                    { id: 'ntfs', name: 'File System (NTFS)', description: 'New Technology File System. Supports ACLs, journaling, and huge files.', resources: [] },
                    { id: 'registry', name: 'Registry', description: 'Hierarchical database of configuration settings.', resources: [] },
                    { id: 'services', name: 'Services', description: 'Background processes in Windows.', resources: [] },
                    { id: 'ad', name: 'Active Directory', description: 'Microsoft directory service for domain network management.', resources: [] },
                    { id: 'powershell', name: 'PowerShell', description: 'Task automation and configuration management framework (cmdlets).', resources: [] }
                ]
            },
            {
                title: 'Linux',
                items: [
                    { id: 'kernel', name: 'Kernel', description: 'Core component managing hardware and system resources.', resources: [] },
                    { id: 'shell', name: 'Shell', description: 'Command-line interface (Bash, Zsh) to interact with the OS.', resources: [] },
                    { id: 'perms', name: 'Permissions', description: 'Read, Write, Execute (rwx). Chmod/chown/chgrp commands.', resources: [] },
                    { id: 'pkg', name: 'Package Management', description: 'Tools to install software (apt, yum, pacman, dnf).', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'programming',
        title: 'Programming Skills',
        category: 'Development',
        icon: Code,
        description: 'Coding for automation and exploitation.',
        subTopics: [
            {
                title: 'Python',
                items: [
                    { id: 'py-script', name: 'Scripting', description: 'Writing scripts to automate repetitive tasks.', resources: [] },
                    { id: 'py-req', name: 'Requests', description: 'Library for sending HTTP requests easily.', resources: [] },
                    { id: 'py-scapy', name: 'Scapy', description: 'Packet manipulation library for network probing and attacks.', resources: [] }
                ]
            },
            {
                title: 'JavaScript',
                items: [
                    { id: 'dom', name: 'DOM Manipulation', description: 'Interacting with the Document Object Model for XSS.', resources: [] },
                    { id: 'xss', name: 'XSS Payloads', description: 'Crafting malicious scripts to execute in browsers.', resources: [] },
                    { id: 'node', name: 'Node.js', description: 'JavaScript runtime for server-side scripting.', resources: [] }
                ]
            },
            {
                title: 'Bash',
                items: [
                    { id: 'bash-script', name: 'Scripting', description: 'Automating command line tasks.', resources: [] },
                    { id: 'pipelines', name: 'Pipelines', description: 'Chaining commands (e.g., cat file | grep content).', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'cyber-threats',
        title: 'Cyber Threats',
        category: 'Security',
        icon: Bug,
        description: 'Understanding the adversary.',
        subTopics: [
            {
                title: 'Malware',
                items: [
                    { id: 'virus', name: 'Virus', description: 'Malicious code that attaches to host files to replicate.', resources: [] },
                    { id: 'worm', name: 'Worm', description: 'Self-replicating malware allowing spread across networks without host interaction.', resources: [] },
                    { id: 'ransom', name: 'Ransomware', description: 'Malware that encrypts data and demands payment for the key.', resources: [] },
                    { id: 'trojan', name: 'Trojan', description: 'Malware disguised as legitimate software.', resources: [] }
                ]
            },
            {
                title: 'Social Engineering',
                items: [
                    { id: 'phishing', name: 'Phishing', description: 'Fraudulent emails aiming to steal credentials.', resources: [] },
                    { id: 'vishing', name: 'Vishing', description: 'Voice phishing (phone calls).', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'network-security',
        title: 'Network Security',
        category: 'Security',
        icon: Shield,
        description: 'Securing the network infrastructure.',
        subTopics: [
            {
                title: 'Defensive Tools',
                items: [
                    { id: 'fw', name: 'Firewalls', description: 'Filters traffic based on IP, port, and protocol.', resources: [] },
                    { id: 'ids', name: 'IDS/IPS', description: 'Intrusion Detection/Prevention Systems.', resources: [] },
                    { id: 'vpn', name: 'VPN', description: 'Virtual Private Network. Encrypted tunnel for privacy.', resources: [] }
                ]
            },
            {
                title: 'Attacks',
                items: [
                    { id: 'dos', name: 'DoS/DDoS', description: 'Denial of Service. Overwhelming a target/network.', resources: [] },
                    { id: 'mitm', name: 'Man-in-the-Middle', description: 'Intercepting communication between two parties.', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'app-security',
        title: 'App Security',
        category: 'Security',
        icon: Globe,
        description: 'Securing web and software applications.',
        subTopics: [
            {
                title: 'OWASP Top 10',
                items: [
                    { id: 'injection', name: 'Injection', description: 'SQL, OS Command injection flaws.', resources: [] },
                    { id: 'broken-auth', name: 'Broken Authentication', description: 'Flaws in login/session management.', resources: [] },
                    { id: 'xss-vuln', name: 'XSS', description: 'Cross-Site Scripting vulnerabilities.', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'cryptography',
        title: 'Cryptography',
        category: 'Security',
        icon: Key,
        description: 'Protecting information through encryption.',
        subTopics: [
            {
                title: 'Concepts',
                items: [
                    { id: 'sym', name: 'Symmetric', description: 'Same key for encryption and decryption (AES).', resources: [] },
                    { id: 'asym', name: 'Asymmetric', description: 'Public/Private key pair (RSA).', resources: [] },
                    { id: 'hash', name: 'Hashing', description: 'One-way transformation (SHA-256).', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'cloud-security',
        title: 'Cloud Security',
        category: 'Cloud',
        icon: Cloud,
        description: 'Securing cloud environments.',
        subTopics: [
            {
                title: 'Providers',
                items: [
                    { id: 'aws', name: 'AWS', description: 'Amazon Web Services. Market leader.', resources: [] },
                    { id: 'azure', name: 'Azure', description: 'Microsoft Cloud Services.', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'certifications',
        title: 'Certifications',
        category: 'Validation',
        icon: FileCode,
        description: 'Standard industry certifications.',
        subTopics: [
            {
                title: 'Beginner',
                items: [
                    { id: 'plus', name: 'CompTIA Security+', description: 'Entry-level general security certification.', resources: [] }
                ]
            },
            {
                title: 'Advanced',
                items: [
                    { id: 'oscp', name: 'OSCP', description: 'Offensive Security Certified Professional. Hands-on pentesting.', resources: [] },
                    { id: 'cissp', name: 'CISSP', description: 'Management-level security certification.', resources: [] }
                ]
            }
        ]
    },
    {
        id: 'ctf',
        title: 'CTF Platforms',
        category: 'Practice',
        icon: Zap,
        description: 'Hands-on practice environments.',
        subTopics: [
            {
                title: 'Advanced Platform',
                items: [
                    { id: 'gopwnit', name: 'gopwnit', description: 'Advanced CTF platform for mastering cybersecurity skills.', resources: [{ title: 'Visit Platform', url: 'https://gopwnit.com', type: 'tool' }] }
                ]
            }
        ]
    }
];
