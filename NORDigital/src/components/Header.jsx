import React from 'react'
import { Container } from './Container'

export const Header = () => {
    return (
        <section className="boder-b bg-pri-c-2 border-stroke-2">
            <Container className={"relative"}>
                <div className="relative z-10 flex items-center justify-between py-4 lg:py-6">
                    <div className="flex items-center space-x-4">
                        <h4 className="h3 relative after:bg-pri-f-1 after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-1000 cursor-pointer">
                            NOR'Digital
                        </h4>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="">A propos</a>
                        <a href="">Portfolio</a>
                        <a href="">Services</a>
                        <a href="">Mes tarifs</a>
                        <a href="">Prendre contact</a>
                    </div>
                </div>
            </Container>
        </section>
    )
}
