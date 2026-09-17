import { about, type Segment } from '../data'

const tech = [
  { name: 'C', icon: 'c/c-original.svg' },
  { name: 'C++', icon: 'cplusplus/cplusplus-original.svg' },
  { name: 'Java', icon: 'java/java-original.svg' },
  { name: 'JavaScript', icon: 'javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'typescript/typescript-original.svg' },
  { name: 'Python', icon: 'python/python-original.svg' },
  { name: 'Go', icon: 'go/go-original.svg' },
  { name: 'Rust', icon: 'rust/rust-original.svg' },
  { name: 'PHP', icon: 'php/php-original.svg' },
  { name: 'HTML5', icon: 'html5/html5-original.svg' },
  { name: 'CSS3', icon: 'css3/css3-original.svg' },
  { name: 'React', icon: 'react/react-original.svg' },
  { name: 'Vue.js', icon: 'vuejs/vuejs-original.svg' },
  { name: 'Svelte', icon: 'svelte/svelte-original.svg' },
  { name: 'TailwindCSS', icon: 'tailwindcss/tailwindcss-original.svg' },
  { name: 'Next.js', icon: 'nextjs/nextjs-original.svg' },
  { name: 'Vite', icon: 'vitejs/vitejs-original.svg' },
  { name: 'Node.js', icon: 'nodejs/nodejs-original.svg' },
  { name: 'Express', icon: 'express/express-original.svg' },
  { name: 'NestJS', icon: 'nestjs/nestjs-original.svg' },
  { name: 'FastAPI', icon: 'fastapi/fastapi-original.svg' },
  { name: 'Flask', icon: 'flask/flask-original.svg' },
  { name: 'Django', icon: 'django/django-plain.svg' },
  { name: 'PostgreSQL', icon: 'postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'mysql/mysql-original.svg' },
  { name: 'SQLite', icon: 'sqlite/sqlite-original.svg' },
  { name: 'MongoDB', icon: 'mongodb/mongodb-original.svg' },
  { name: 'Redis', icon: 'redis/redis-original.svg' },
  { name: 'Prisma', icon: 'prisma/prisma-original.svg' },
  { name: 'Supabase', icon: 'supabase/supabase-original.svg' },
  { name: 'Docker', icon: 'docker/docker-original.svg' },
  { name: 'Kubernetes', icon: 'kubernetes/kubernetes-original.svg' },
  { name: 'Nginx', icon: 'nginx/nginx-original.svg' },
  { name: 'Linux', icon: 'linux/linux-original.svg' },
  { name: 'Bash', icon: 'bash/bash-original.svg' },
  { name: 'Git', icon: 'git/git-original.svg' },
  { name: 'GitHub', icon: 'github/github-original.svg' },
  { name: 'GitHub Actions', icon: 'githubactions/githubactions-original.svg' },
  { name: 'GitLab', icon: 'gitlab/gitlab-original.svg' },
  { name: 'Prometheus', icon: 'prometheus/prometheus-original.svg' },
  { name: 'Grafana', icon: 'grafana/grafana-original.svg' },
  { name: 'Terraform', icon: 'terraform/terraform-original.svg' },
  { name: 'Ansible', icon: 'ansible/ansible-original.svg' },
  { name: 'Electron', icon: 'electron/electron-original.svg' },
  { name: 'GraphQL', icon: 'graphql/graphql-plain.svg' },
  { name: 'Vim', icon: 'vim/vim-original.svg' },
]

const iconBase = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/'

function Segments({ parts }: { parts: Segment[] }) {
  return (
    <>
      {parts.map((part, i) =>
        part.href ? (
          <a
            className="link"
            href={part.href}
            target="_blank"
            rel="noreferrer"
            key={i}
          >
            {part.t}
          </a>
        ) : part.h ? (
          <span className="hl" key={i}>
            {part.t}
          </span>
        ) : (
          <span key={i}>{part.t}</span>
        ),
      )}
    </>
  )
}

export default function Introduction() {
  return (
    <section className="block">
      <span className="eyebrow">Introduction</span>
      <div className="intro">
        {about.whoami.map((paragraph, i) => (
          <p key={i}>
            <Segments parts={paragraph} />
          </p>
        ))}
      </div>
      <div className="tech-marquee" aria-label="Technologies I work with">
        <div className="tech-marquee__track">
          <div className="tech-marquee__set">
            {tech.map((t) => (
              <img
                className="tech-marquee__icon"
                src={iconBase + t.icon}
                alt={t.name}
                decoding="async"
                key={t.name}
              />
            ))}
          </div>
          <div className="tech-marquee__set" aria-hidden="true">
            {tech.map((t) => (
              <img
                className="tech-marquee__icon"
                src={iconBase + t.icon}
                alt=""
                decoding="async"
                key={t.name}
              />
            ))}
          </div>
        </div>
      </div>
      <hr className="scribble" aria-hidden="true" />
    </section>
  )
}