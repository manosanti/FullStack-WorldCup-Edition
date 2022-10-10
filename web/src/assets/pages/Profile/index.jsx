// imports from frontend //
import Icon from './../../../components/Icon'
import Card from './../../../components/Icon/Card'

// imports from backend //
import { DateSelect } from '../../../components'

export default function Profile() {
    return (
        <>

            <header className="bg-red-500 text-white p-4">
                <div className="container max-w-3xl flex justify-between p-4">
            <img src="/img/logo-fundo-vermelho.svg" className="w-28 md:w-40" />
                <a href="/profile">
                <Icon name="profile" className="flex w-10" />
                </a>
                </div>
            </header>

            <main className="space-y-6">
                <section id="header" className=" bg-red-500 text-white">
                    <div className="container max-w-3xl space-y-2 p-4 flex items-center space-x-4">
                        <a href="/dashboard">
                        <Icon name="arrowLeft" className="w-7" />
                        </a>
                    <h3 className="text-2xl font-bold">Lucas Santiago</h3>
                    </div>
                </section>

                <section id="content" className="container max-w-3xl p-4 space-y-4">
                    <h2 className="text-red-500 text-xl font-bold">Seus palpites:</h2>

                    <DateSelect />

                    <div className="max-w-3xl space-y-4">

                        <Card timeA={{ slug: 'sui' }}
                            timeB={{ slug: 'cam' }}
                            match={{ time: '7:00' }}
                        />

                        <Card timeA={{ slug: 'uru' }}
                            timeB={{ slug: 'cor' }}
                            match={{ time: '7:00' }}
                        />

                        <Card timeA={{ slug: 'por' }}
                            timeB={{ slug: 'gan' }}
                            match={{ time: '7:00' }}
                        />

                    </div>

                </section>
            </main>

        </>
    )}  