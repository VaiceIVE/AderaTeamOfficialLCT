import pandas as pd
import openpyxl
import pymorphy2


def exProcess(filename):
    file = "tables/" + filename
    xl = openpyxl.load_workbook(file, data_only=True)
    sheets = xl.sheetnames
    sheet = xl[sheets[0]]
    codecol = -1
    measuringunitcolumn = -1
    numberofunitscolumn = -1
    whitelist = [
        "Замена",
        "Установка",
        "Демонтаж",
        "Изготовление",
        "Устройство",
        "Ремонт",
        "Исправление",
        "Размещение",
        "Посев",
        "Нанесение",
        "Монтаж",
        "Окрашивание",
        "Исправление",
        "Окраска"
    ]
    banList = [
        "Масса",
        "Стоимость",
        "Сплошная",
        "Щебень",
        "Смеси",
        "Механизированная",
        "Доски",
        "Шифр",
        "Локальная",
        "Плиты",
        "Пигменты",
        "Итого",
        "Всего"
    ]
    respos = 1
    res = list()
    usedWorks = list()
    wordslist = list()
    costex = 0
    singlecostcolumn = -1
    allcostcolumn = -1
    for row in range(1, sheet.max_row + 1):
        for column in range(1, sheet.max_column + 1):
            cellval = sheet.cell(row=row, column=column).value
            if type(cellval) is not None and type(cellval) is str:
                if codecol == -1 and "шифр" in cellval.lower():
                    codecol = column
                if measuringunitcolumn == -1 and "единица изм" in cellval.lower():
                    measuringunitcolumn = column
                if numberofunitscolumn == -1 and "кол-во" in cellval.lower() or "количество" in cellval.lower():
                    numberofunitscolumn = column
                if costex == 1 and 'руб.' in cellval.lower() and allcostcolumn == -1:
                    allcostcolumn = column
                    costex = 2
                if costex == 0 and 'руб.' in cellval.lower() and singlecostcolumn == -1:
                    singlecostcolumn = column
                    costex = 1
            if cellval is not None and\
                    type(cellval) != int and\
                    type(cellval) != float:
                currentval = cellval.lower().split()
                if "раздел:" in currentval or "раздел" in currentval:
                    print(usedWorks)
                    usedWorks.clear()
                if len(cellval.split()) > 4 and \
                        len(cellval) > 15 and \
                        (column != 1 and \
                        type(sheet.cell(row=row, column=column - 1).value) is not None and \
                         cellval.split()[0] not in usedWorks and \
                         cellval.split()[0] in whitelist and \
                         not cellval[0].isdigit()):
                            measure = sheet.cell(row=row, column=measuringunitcolumn).value
                            unit = sheet.cell(row=row, column=numberofunitscolumn).value
                            code = sheet.cell(row=row, column=codecol).value
                            currow = row
                            while type(sheet.cell(row=currow, column=singlecostcolumn).value) is not float:
                                currow += 1
                            singlecost = sheet.cell(row=currow, column=singlecostcolumn).value
                            currow = row
                            while type(sheet.cell(row=currow, column=allcostcolumn).value) is not float:
                                currow += 1
                            allcost = sheet.cell(row=currow, column=allcostcolumn).value
                            usedrow = row
                            focalWord = cellval.split()[0]
                            usedWorks.append(focalWord)
                            wordslist.append(cellval)
                            word = cellval
                            dct = dict()
                            if 'Замена' == focalWord or\
                                'Устройство' == focalWord or\
                                'Установка' == focalWord or\
                                'Ремонт' == focalWord or\
                                'Исправление' == focalWord:
                                dct.update({"kpgz": "02.06.05.01 РАБОТЫ РЕМОНТНО-ВОССТАНОВИТЕЛЬНЫЕ СВЯЗАННЫЕ С ЭЛЕМЕНТАМИ БЛАГОУСТРОЙСТВА ТЕРРИТОРИЙ"})
                            if 'Изготовление' == focalWord:
                                dct.update({"kpgz": "02.03.03.10 ОБУСТРОЙСТВО ТЕРРИТОРИЙ ЭЛЕМЕНТАМИ ИНЖЕНЕРНЫХ КОММУНИКАЦИЙ"})
                            if 'Демонтаж' == focalWord:
                                dct.update({"kpgz": "02.03.03.06 ОБУСТРОЙСТВО МАФ ТЕРРИТОРИЙ"})
                            if 'Размещение' == focalWord:
                                dct.update({"kpgz": "02.03.04 СТРОИТЕЛЬСТВО ПАРКОВ, МЕСТ ОТДЫХА И ДОСУГА"})
                            if 'Посев' == focalWord:
                                dct.update({"kpgz": "02.03.03.03 ОЗЕЛЕНЕНИЕ ТЕРРИТОРИЙ"})
                            if 'Нанесение' == focalWord:
                                dct.update({"kpgz": "02.06.05.02 РАБОТЫ РЕМОНТНО-ВОССТАНОВИТЕЛЬНЫЕ СВЯЗАННЫЕ С ЭЛЕМЕНТАМИ СРЕДСТВ ОБЕСПЕЧЕНИЯ ТРАНСПОРТНОЙ БЕЗОПАСНОСТИ ТЕРРИТОРИЙ"})
                            if 'Монтаж' == focalWord:
                                dct.update({"kpgz": "02.03.03.07 ОБУСТРОЙСТВО ТЕРРИТОРИЙ СРЕДСТВАМИ ОБЕСПЕЧЕНИЯ ТРАНСПОРТНОЙ БЕЗОПАСНОСТИ"})
                            if 'Окрашивание' == focalWord or 'Окраска' == focalWord:
                                dct.update({"kpgz": "02.03 РАБОТЫ ПО БЛАГОУСТРОЙСТВУ ТЕРРИТОРИЙ"})
                            if 'Исправление' == focalWord:
                                dct.update({"kpgz": "02.03.03.08 ОБУСТРОЙСТВО ТЕРРИТОРИЙ ЭЛЕМЕНТАМИ ОРГАНИЗАЦИИ РЕЛЬЕФА"})
                            dct.update({"num": respos})
                            dct.update({"id": usedrow})
                            dct.update({"code": code})
                            dct.update({"spgz": focalWord})
                            dct.update({"name": word})
                            dct.update({"singlecost": singlecost})
                            dct.update({"allcost": allcost})
                            dct.update({"measure": measure})
                            dct.update({"unit": unit})
                            res.append(dct.copy())
                            respos += 1
    for elem in dct:
        print(elem + ', ' + str(dct[elem]))
    print(usedWorks)
    return res

