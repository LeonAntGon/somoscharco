"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card"
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from "lucide-react"
import { motion } from "framer-motion"
import { FaTiktok, FaFacebookF, FaInstagram } from 'react-icons/fa'
import WarpBg from './WarpBg'

export default function ContactoComponent() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    console.log("Form submitted")
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-primary/20 to-background py-6 ">
      <div 
        className="max-w-7xl mx-auto"
      >
        <WarpBg/>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 px-4 lg:px-6">
          <div className="opacity-100 x-0">
            <Card className="h-full bg-white px-4">
              <CardHeader>
                <CardTitle className="text-2xl text-black">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <PhoneIcon className="text-[#5885d5] h-5 w-5 dark:text-gray-50" />
                  <div>
                    <p className="font-semibold text-gray-500">Teléfono</p>
                    <p className="text-gray-500">+54 9 11 3602 9188</p>
                  </div>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <MailIcon className="text-[#5885d5] h-5 w-5 dark:text-gray-50" />
                  <p className="text-gray-500 dark:text-gray-400">hola@somoscharco.com</p>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} className="flex items-center space-x-3">
                  <MapPinIcon className="text-[#5885d5] h-5 w- dark:text-gray-50" />
                  <p className="text-gray-500 dark:text-gray-400">Ciudad Autónoma de Buenos Aires, Argentina.Rocamora 4572. CP. 1184</p>
                </motion.div>
              </CardContent>
            </Card>
          </div>
          
          <div className="opacity-100 x-0">
            <Card className="h-full bg-white">
              <CardHeader>
                <CardTitle className="text-2xl text-black" id="contacto">Envíenos un Mensaje</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input placeholder="Su Nombre" required />
                  <Input type="email" placeholder="Su Correo Electrónico" required />
                  <Input placeholder="Asunto" required />
                  <Textarea placeholder="Su Mensaje" required className="min-h-[100px]" />
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        Enviando...
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center justify-center space-x-2"
                      >
                        <span>Enviar Mensaje</span>
                        <SendIcon className="h-4 w-4" />
                      </motion.div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
        
      </div>
    </section>
  )
}