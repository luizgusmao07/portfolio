import { ExternalLink, Github, Linkedin, Mail, MapPin } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const socialLinks = [
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/luizgusmao07',
    label: 'luizgusmao07',
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/luiz-guilherme-t-284716273/',
    label: 'Luiz Guilherme Tristão Gusmão',
  },
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:your.email@example.com',
    label: 'lgtgusmao@hotmail.com',
  },
]

export function ProfileCard() {
  const { t } = useTranslation()

  return (
    <Card className="h-fit">
      <CardHeader className="pb-4 text-center">
        <div className="mb-4 flex justify-center">
          <Avatar className="size-24">
            <AvatarImage />
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
        </div>
        <CardTitle className="text-xl">Luiz Gusmão</CardTitle>
        <CardDescription className="flex items-center justify-center gap-1">
          <MapPin className="size-3 text-purple-600 dark:text-purple-400" />
          {t('common.location')}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-2 text-sm font-medium">{t('common.connect')}</h4>
          <div className="space-y-2">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Button
                  key={link.name}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-full justify-start px-2"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="mr-2 size-4 text-purple-600 dark:text-purple-400" />
                    <span className="truncate text-xs">{link.label}</span>
                    <ExternalLink className="ml-auto size-3 text-purple-600 opacity-50 dark:text-purple-400" />
                  </a>
                </Button>
              )
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
